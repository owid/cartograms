export function getTotalPopulation(data, year) {
  var total = 0;
  for (var x in data) {
    var count = data[x][year];
    if (!isNaN(count)) {
      total = total + Number(data[x][year]);
    }
  }
  return total;
}

export function cosArctan(dx, dy) {
  if (dy === 0) return 0;
  var div = dx / dy;
  return dy > 0
    ? 1 / Math.sqrt(1 + div * div)
    : -1 / Math.sqrt(1 + div * div);
}

export function sinArctan(dx, dy) {
  if (dy === 0) return 1;
  var div = dx / dy;
  return dy > 0
    ? div / Math.sqrt(1 + div * div)
    : -div / Math.sqrt(1 + div * div);
}

export function reverse(array, n) {
  var t,
    j = array.length,
    i = j - n;
  while (i < --j) (t = array[i]), (array[i++] = array[j]), (array[j] = t);
}

export function copyTopo(o) {
  return o instanceof Array
    ? o.map(copyTopo)
    : typeof o === "string" || typeof o === "number"
      ? o
      : copyObject(o);
}

function copyObject(o) {
  var obj = {};
  for (var k in o) obj[k] = copyTopo(o[k]);
  return obj;
}