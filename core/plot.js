import { hexbin } from "d3-hexbin";
import cartogram from "./catogram";
import { getRadius, getGridData, getTransformation, getPath } from "./shaper";
import {
  mover,
  mout,
  mclickBase,
  mclick,
  dragstarted,
  dragged,
  dragended,
} from "./events";
import { colors, margin, width, height, strokeWidth } from "./constants";

export var exportJson = {
  type: "FeatureCollection",
  features: [],
};

export function render(topo, populationData, radius, cellShape, year) {
  let shapeDistance = getRadius(radius, cellShape);
  let cols = width / shapeDistance;
  let rows = height / shapeDistance;
  let pointGrid = d3.range(rows * cols).map(function (el, i) {
    return {
      x: Math.floor(i % cols) * shapeDistance,
      y: Math.floor(i / cols) * shapeDistance,
      datapoint: 0,
    };
  });

  var populationJson = indexByCode(populationData);
  var totalPopulation = getTotalPopulation(populationData, year);

  console.log(totalPopulation);

  var topoCartogram = cartogram()
    .projection(null)
    .properties(function (d) {
      return d.properties;
    })
    .value(function (d) {
      var currentValue = d.properties.count;
      return +currentValue;
    });
  topoCartogram.features(topo, topo.objects.tiles.geometries);
  topoCartogram.value(function (d) {
    var currentValue = populationJson[d.properties.id][year];
    return +currentValue;
  });

  var topoFeatures = topoCartogram(
    topo,
    topo.objects.tiles.geometries
  ).features;
  exportFormat(topoFeatures);

  let newHexbin = hexbin()
    .radius(radius)
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    });

  d3.select("#container").selectAll("*").remove();
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width + margin.left + margin.top)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left} ${margin.top})`);

  svg
    .append("g")
    .attr("id", "hexes")
    .selectAll(".hex")
    .data(getGridData(cellShape, newHexbin, pointGrid))
    .enter()
    .append("path")
    .attr("class", "hex")
    .attr("transform", getTransformation(cellShape))
    .attr("d", getPath(cellShape, newHexbin, shapeDistance))
    .style("fill", "#fff")
    .style("stroke", "#e0e0e0")
    .style("stroke-width", strokeWidth)
    .on("click", mclickBase);

  let features = flattenFeatures(topoFeatures);
  let cellCount = 0;
  for (let i = 0; i < features.length; i++) {
    for (let j = 0; j < features[i].coordinates.length; j++) {
      var polygonPoints = features[i].coordinates[j];

      let tessellatedPoints = pointGrid.reduce(function (arr, el) {
        if (d3.polygonContains(polygonPoints, [el.x, el.y])) arr.push(el);
        return arr;
      }, []);
      cellCount = cellCount + tessellatedPoints.length;

      svg
        .append("g")
        .attr("id", "hexes")
        .selectAll(".hex")
        .data(getGridData(cellShape, newHexbin, tessellatedPoints))
        .enter()
        .append("path")
        .attr("class", "hex" + features[i].properties.id)
        .attr("transform", getTransformation(cellShape))
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y;
        })
        .attr("d", getPath(cellShape, newHexbin, shapeDistance))
        .style("fill", colors[i % 19])
        .style("stroke", "#000")
        .style("stroke-width", strokeWidth)
        .on("click", mclick)
        .on("mouseover", mover)
        .on("mouseout", mout)
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );
    }
  }

  setCellSize(totalPopulation, cellCount);
}

function indexByCode(data) {
  var obj = {};
  for (var x in data) {
    obj[data[x].code] = data[x];
  }
  return obj;
}

function getTotalPopulation(data, year) {
  var total = 0;
  for (var x in data) {
    var count = data[x][year];
    if (!isNaN(count)) {
      total = total + Number(data[x][year]);
    }
  }
  return total;
}

function setCellSize(totalPopulation, cellCount) {
  document.getElementById("cell-size").value =
    (totalPopulation / (cellCount * 1000000)).toFixed(1) + "M";
}

function flattenFeatures(topoFeatures) {
  let features = [];
  for (let i = 0; i < topoFeatures.length; i++) {
    var tempFeatures = [];
    if (topoFeatures[i].geometry.type == "MultiPolygon") {
      for (let j = 0; j < topoFeatures[i].geometry.coordinates.length; j++) {
        tempFeatures[j] = topoFeatures[i].geometry.coordinates[j][0];
      }
    } else if (topoFeatures[i].geometry.type == "Polygon") {
      tempFeatures[0] = topoFeatures[i].geometry.coordinates[0];
    }
    features[i] = {
      coordinates: tempFeatures,
      properties: topoFeatures[i].properties,
    };
  }
  return features;
}

function exportFormat(topoFeatures) {
  for (let i = 0; i < topoFeatures.length; i++) {
    if (topoFeatures[i].geometry.type == "MultiPolygon") {
      exportJson.features[i] = topoFeatures[i];
      exportJson.features[i].geometry.type = "MultiPolygon";
    } else {
      exportJson.features[i] = topoFeatures[i];
      exportJson.features[i].geometry.type = "Polygon";
    }
  }
}
