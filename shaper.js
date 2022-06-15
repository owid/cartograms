export function rightRoundedRect(x, y, width, height, radius) {
    return "M" + x + "," + y
        + "h" + (width - radius)
        + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
        + "v" + (height - 2 * radius)
        + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
        + "h" + (radius - width)
        + "z";
}

export function getRadius(radius, cellShape) {
    if (cellShape == "Hexagon") {
        return radius * 1.5;
    } else if (cellShape == "Square") {
        return radius * 2;
    }
}

export function getGridData(cellShape, bin, grid) {
    if (cellShape == "Hexagon") {
        return bin(grid);
    } else if (cellShape == "Square") {
        return grid;
    }
}

export function getPath(cellShape, bin, distance) {
    if (cellShape == "Hexagon") {
        return bin.hexagon()
    } else if (cellShape == "Square") {
        return function (d) {
            return rightRoundedRect(d.x / 2, d.y / 2, distance, distance, 0);
        };
    }
}

export function getTransformation(cellShape) {
    if (cellShape == "Hexagon") {
        return function (d) { return 'translate(' + d.x + ', ' + d.y + ')'; }
    } else if (cellShape == "Square") {
        return function (d) { return 'translate(' + d.x / 2 + ', ' + d.y / 2 + ')'; };
    }
}

export function getNearestSlot(x, y, n, cellShape) {
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
        var sx = n * 2
        var sy = n * 2
        gridy = y - (y % sy)
        gridx = x - (x % sx)
        return [gridx, gridy]
    }
}