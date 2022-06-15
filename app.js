import { hexbin } from 'd3-hexbin'
import cartogram from "./catogram"
import { getRadius, getGridData, getTransformation, getPath } from './shaper';
import { mover, mout, mclickBase, mclick, dragstarted, dragged, dragended } from './mouse-events';
import { colors, margin, width, height, strokeWidth } from './constants';
import { download } from './export';

var exportJson

document.querySelector('#loader').classList.add("hide");

let radiusInput = document.querySelector('input#radius');
let radiusButton = document.querySelector('input#select-radius');

let downloadButton = document.querySelector('#download');

let cellShapeButton = document.querySelector('#cell-shape');
let cellShapeInput = document.querySelector('#cell-shape-option');

let yearInput = document.querySelector('input#year');
let yearButton = document.querySelector('input#select-year');

radiusButton.addEventListener('click', () => {
  radiusInput = document.querySelector('input#radius');
  document.querySelector('#loader').classList.remove("hide");
  start()
});

yearButton.addEventListener('click', () => {
  yearInput = document.querySelector('input#year');
  document.querySelector('#loader').classList.remove("hide");
  start()
});

downloadButton.addEventListener('click', () => {
  let fileType = document.querySelector('#download-option').value;
  download(fileType, yearInput.value);
});

cellShapeButton.addEventListener('click', () => {
  cellShapeInput = document.querySelector('#cell-shape-option');
  document.querySelector('#loader').classList.remove("hide");
  start()
});

function start() {
  let hexRadius = radiusInput.value
  let cellShape = cellShapeInput.value
  const topoData = d3.json('https://raw.githubusercontent.com/owid/cartograms/main/data/population/2018/v2/topo.json');
  const popData = d3.csv('https://raw.githubusercontent.com/owid/cartograms/main/data/world-population-unpd-flat.csv');
  Promise.all([topoData, popData]).then(res => {
    let [topoData, popData] = res;

    plot_map(topoData, popData, hexRadius, cellShape);
    document.querySelector('#loader').classList.add("hide");
  });
}

function plot_map(topo, pop, hexRadius, cellShape) {
  let hexDistance = getRadius(hexRadius, cellShape)
  let cols = width / hexDistance
  let rows = height / hexDistance;
  let pointGrid = d3.range(rows * cols).map(function (el, i) {
    return {
      x: Math.floor(i % cols) * hexDistance,
      y: Math.floor(i / cols) * hexDistance,
      datapoint: 0
    };
  });

  var populationJson = getData(pop)

  var topo_cartogram = cartogram()
    .projection(null)
    .properties(function (d) {
      return d.properties;
    })
    .value(function (d) {
      var currentValue = d.properties.count
      return +currentValue
    });

  topo_cartogram.features(topo, topo.objects.tiles.geometries)

  topo_cartogram.value(function (d) {
    var currentValue = populationJson[d.properties.id][yearInput.value]
    return +currentValue
  });

  var topoFeatures = topo_cartogram(topo, topo.objects.tiles.geometries).features

  exportJson = {
    "type": "FeatureCollection",
    "features": []
  }

  for (let i = 0; i < topoFeatures.length; i++) {
    if (topoFeatures[i].geometry.type == "MultiPolygon") {
      exportJson.features[i] = topoFeatures[i]
      exportJson.features[i].geometry.type = "MultiPolygon"
    } else {
      exportJson.features[i] = topoFeatures[i]
      exportJson.features[i].geometry.type = "Polygon"
    }
  }

  let features = []
  for (let i = 0; i < topoFeatures.length; i++) {
    var tempFeatures = []
    if (topoFeatures[i].geometry.type == "MultiPolygon") {
      for (let j = 0; j < topoFeatures[i].geometry.coordinates.length; j++) {
        tempFeatures[j] = topoFeatures[i].geometry.coordinates[j][0]
      }
    }
    else if (topoFeatures[i].geometry.type == "Polygon") {
      tempFeatures[0] = topoFeatures[i].geometry.coordinates[0]
    }
    features[i] = {
      "coordinates": tempFeatures,
      "properties": topoFeatures[i].properties
    }
  }

  d3.select('#container').selectAll("*").remove()

  let newHexbin = hexbin()
    .radius(hexRadius)
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; })

  const svg = d3.select('#container')
    .append('svg')
    .attr('width', width + margin.left + margin.top)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);

  svg.append('g').attr('id', 'hexes')
    .selectAll('.hex')
    .data(getGridData(cellShape, newHexbin, pointGrid))
    .enter().append('path')
    .attr('class', 'hex')
    .attr('transform', getTransformation(cellShape))
    .attr('d', getPath(cellShape, newHexbin, hexDistance))
    .style('fill', '#fff')
    .style('stroke', '#e0e0e0')
    .style('stroke-width', strokeWidth)
    .on("click", mclickBase);

  for (let i = 0; i < features.length; i++) {
    for (let j = 0; j < features[i].coordinates.length; j++) {
      var polygonPoints = features[i].coordinates[j];

      let usPoints = pointGrid.reduce(function (arr, el) {
        if (d3.polygonContains(polygonPoints, [el.x, el.y])) arr.push(el);
        return arr;
      }, [])

      svg.append('g')
        .attr('id', 'hexes')
        .selectAll('.hex')
        .data(getGridData(cellShape, newHexbin, usPoints))
        .enter().append('path')
        .attr('class', 'hex' + features[i].properties.id)
        .attr('transform', getTransformation(cellShape))
        .attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; })
        .attr('d', getPath(cellShape, newHexbin, hexDistance))
        .style('fill', colors[i % 19])
        .style('stroke', '#000')
        .style('stroke-width', strokeWidth)
        .on("click", mclick)
        .on("mouseover", mover)
        .on("mouseout", mout)
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
    }
  }
}

function getData(data) {
  var obj = {}
  for (var x in data) {
    obj[data[x].code] = data[x]
  }
  return obj
}

start()