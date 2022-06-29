import { hexbin } from "d3-hexbin";
import cartogram from "./catogram";
import { getTotalPopulation } from "./util";
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
import { colors, margin, width, height, strokeWidth, cellScale } from "./constants";

export var exportJson = {
  type: "FeatureCollection",
  features: [],
};

export function render(topo, populationData, cellDetails, year, populationFactor) {
  let cellRadius = cellDetails.radius;
  let cellShape = cellDetails.shape;
  
  let shapeDistance = getRadius(cellRadius, cellShape);
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
    topo.objects.tiles.geometries,
    cellDetails,
    populationData, year,
    populationFactor
  ).features;
  exportFormat(topoFeatures);

  let newHexbin = hexbin()
    .radius(cellRadius)
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

  var cellSize = getCellSize(totalPopulation, cellCount);
  
  switch (cellDetails.scale) {
    case cellScale.Fixed:
      if (cellSize > 1.0) {
        console.log(">", cellSize, populationFactor);
        render(topo, populationData, cellDetails, year, populationFactor + 0.1);
      } else if (cellSize < 1.0) {
        console.log("<", cellSize, populationFactor);
        render(topo, populationData, cellDetails, year, populationFactor - 0.1);
      } else {
        console.log("=", cellSize, populationFactor);
        setCellSize(cellSize);
      }
      break;
    case cellScale.Fluid:
      setCellSize(cellSize);
  }
  
}

function indexByCode(data) {
  var obj = {};
  for (var x in data) {
    obj[data[x].code] = data[x];
  }
  return obj;
}

function setCellSize(cellSize) {
  document.getElementById("cell-size").value = cellSize + "M";
}

function getCellSize(totalPopulation, cellCount) {
  return (totalPopulation / (cellCount * 1000000)).toFixed(1);
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
