import { getTransformation, getNearestSlot } from "./shaper";
import { strokeWidth } from "./constants";
import { cellAction } from "./constants";

export function mover(d) {
  d3.selectAll("." + this.getAttribute("class"))
    .transition()
    .duration(10)
    .style("fill-opacity", 0.9);
}

export function mout(d) {
  d3.selectAll("." + this.getAttribute("class"))
    .transition()
    .duration(10)
    .style("fill-opacity", 1);
}

export function mclickBase(d) {
  let selectElement = document.querySelector("#cell-option");
  switch (selectElement.value) {
    case cellAction.Remove:
      d3.select(this)
        .style("fill", "#fff")
        .style("stroke", "#e0e0e0")
        .style("stroke-width", strokeWidth)
        .lower();
      break;
    case cellAction.Add:
      let colorElement = document.querySelector("#color-option");
      d3.select(this)
        .style("stroke-width", strokeWidth)
        .style("fill", colorElement.value)
        .style("stroke", "#000")
        .on("mouseover", mover)
        .on("mouseout", mout)
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .raise();
      break;
  }
}

export function mclick(d) {
  let selectElement = document.querySelector("#cell-option");
  switch (selectElement.value) {
    case cellAction.Remove:
      d3.select(this).remove();
      break;
    case cellAction.Add:
      let colorElement = document.querySelector("#color-option");
      d3.select(this)
        .style("stroke-width", strokeWidth)
        .style("fill", colorElement.value)
        .style("stroke", "#000")
        .on("mouseover", mover)
        .on("mouseout", mout)
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .raise();
      break;
  }
}

export function dragstarted(event, d) {
  d.fixed = false;
  d3.select(this).raise().style("stroke-width", 1).style("stroke", "#000");
}

export function dragged(event, d) {
  let cellShape = document.querySelector("#cell-shape").value;
  let hexRadius = document.querySelector("input#radius").value;
  var x = event.x;
  var y = event.y;
  var grids = getNearestSlot(x, y, hexRadius, cellShape);
  d3.select(this)
    .attr("x", (d.x = grids[0]))
    .attr("y", (d.y = grids[1]))
    .attr("transform", getTransformation(cellShape));
}

export function dragended(event, d) {
  d.fixed = true;
  d3.select(this).style("stroke-width", strokeWidth).style("stroke", "#000");
}
