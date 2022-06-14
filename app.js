import { hexbin } from 'd3-hexbin'
import cartogram from "./catogram"

var exportJson

document.querySelector('#loader').classList.add("hide");
let colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
  '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d']

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
  var filename = "cartogram" + yearInput.value;
  if (fileType == "Geojson") {
    downloadObjectAsJson(exportJson, filename)
  } else if (fileType == "SVG") {
    d3.select("#download").each(function () {
      d3.select(this)
        .attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#container").html()))
        .attr("download", filename + ".svg")
    })
  }
});

cellShapeButton.addEventListener('click', () => {
  cellShapeInput = document.querySelector('#cell-shape-option');
  start()
});

const margin = { top: 15, right: 10, bottom: 15, left: 10 };
const width = 1350 - margin.left - margin.right;
const height = 750 - margin.top - margin.bottom;
const strokeWidth = 0.5

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

function mover(d) {
  d3.selectAll("." + this.getAttribute('class'))
  // d3.select(this)
    .transition()
    .duration(10)
    .style("fill-opacity", 0.9);
}

function mout(d) {
  d3.selectAll("." + this.getAttribute('class'))
  // d3.select(this)
    .transition()
    .duration(10)
    .style("fill-opacity", 1);
}

function mclickBase(d) {
  let selectElement = document.querySelector('#cell-option');
  if (selectElement.value == "Remove") {
    d3.select(this)
      .style('fill', '#fff')
      .style('stroke', '#e0e0e0')
      .style('stroke-width', strokeWidth)
      .lower();
  } else {
    let colorElement = document.querySelector('#color-option');
    d3.select(this)
      .style('stroke-width', strokeWidth)
      .style('fill', colorElement.value)
      .style('stroke', '#000')
      .on("mouseover", mover)
      .on("mouseout", mout)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .raise();
  }
}

function mclick(d) {
  let selectElement = document.querySelector('#cell-option');
  if (selectElement.value == "Remove") {
    d3.select(this)
      .remove()
  } else {
    let colorElement = document.querySelector('#color-option');
    d3.select(this)
      .style('stroke-width', strokeWidth)
      .style('fill', colorElement.value)
      .style('stroke', '#000')
      .on("mouseover", mover)
      .on("mouseout", mout)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .raise();
  }
}

function dragstarted(event, d) {
  d.fixed = false
  d3.select(this).raise()
    .style('stroke-width', 1)
    .style('stroke', '#000');
}

function dragged(event, d) {
  let cellShape = document.querySelector('#cell-shape-option').value;
  let hexRadius = radiusInput.value
  var x = event.x
  var y = event.y
  var grids = round(x, y, hexRadius, cellShape);
  d3.select(this)
    .attr("x", d.x = grids[0])
    .attr("y", d.y = grids[1])
    .attr('transform', getTransformation(cellShape))
}

function dragended(event, d) {
  d.fixed = true
  d3.select(this)
    .style('stroke-width', strokeWidth)
    .style('stroke', '#000');
}

function round(x, y, n, cellShape) {
  if (cellShape == "Hexagon") {
    var gridx
    var gridy
    var factor = Math.sqrt(3) / 2
    var d = n * 2
    var sx = d * factor
    var sy = n * 3
    if (y % sy < n) {
      gridy = y - (y % sy)
      gridx = x - (x % sx)
    } else {
      gridy = y + (d - (n * factor) / 2) - (y % sy);
      gridx = x + (n * factor) - (x % sx);
    }
    return [gridx, gridy]
  } else if (cellShape == "Square") {
    var gridx
    var gridy
    var factor = 2
    var sx = n * factor
    var sy = n * factor
    if (y % sy < n) {
      gridy = y - (y % sy)
      gridx = x - (x % sx)
    } else {
      gridy = y + (n * factor) - (y % sy);
      gridx = x + (n * factor) - (x % sx);
    }
    return [gridx, gridy]
  }
}

function getData(data) {
  var obj = {}
  for (var x in data) {
    obj[data[x].code] = data[x]
  }
  return obj
}

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function rightRoundedRect(x, y, width, height, radius) {
  return "M" + x + "," + y
       + "h" + (width - radius)
       + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
       + "v" + (height - 2 * radius)
       + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
       + "h" + (radius - width)
       + "z";
}

function getRadius(radius, cellShape) {
  if (cellShape == "Hexagon") {
    return radius;
  } else if (cellShape == "Square") {
    return radius;
  }
}

function getGridData(cellShape, bin, grid) {
  if (cellShape == "Hexagon") {
    return bin(grid);
  } else if (cellShape == "Square") {
    return grid;
  }
}

function getPath(cellShape, bin, distance) {
  if (cellShape == "Hexagon") {
    return bin.hexagon()
  } else if (cellShape == "Square") {
    return function(d) {
      return rightRoundedRect(d.x/2, d.y/2, distance, distance, 0);
    };
  }
}

function getTransformation(cellShape) {
  if (cellShape == "Hexagon") {
    return function (d) { return 'translate(' + d.x + ', ' + d.y + ')'; }
  } else if (cellShape == "Square") {
    return function (d) { return 'translate(' + d.x/2 + ', ' + d.y/2 + ')'; };
  }
}

start()