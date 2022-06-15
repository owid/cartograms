import { getNearestSlot } from "./shaper";
import { getTransformation } from "./shaper";
import { strokeWidth } from "./constants";

export function mover(d) {
    d3.selectAll("." + this.getAttribute('class'))
        // d3.select(this)
        .transition()
        .duration(10)
        .style("fill-opacity", 0.9);
}

export function mout(d) {
    d3.selectAll("." + this.getAttribute('class'))
        // d3.select(this)
        .transition()
        .duration(10)
        .style("fill-opacity", 1);
}

export function mclickBase(d) {
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

export function mclick(d) {
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

export function dragstarted(event, d) {
    d.fixed = false
    d3.select(this).raise()
        .style('stroke-width', 1)
        .style('stroke', '#000');
}

export function dragged(event, d) {
    let cellShape = document.querySelector('#cell-shape-option').value;
    let hexRadius = document.querySelector('input#radius').value;
    var x = event.x
    var y = event.y
    var grids = getNearestSlot(x, y, hexRadius, cellShape);
    d3.select(this)
        .attr("x", d.x = grids[0])
        .attr("y", d.y = grids[1])
        .attr('transform', getTransformation(cellShape))
}

export function dragended(event, d) {
    d.fixed = true
    d3.select(this)
        .style('stroke-width', strokeWidth)
        .style('stroke', '#000');
}