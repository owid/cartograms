import { sum } from "d3-array";
import { geoAlbers, geoPath } from "d3-geo";
import { feature as topoFeature } from "topojson-client";
import { getTotalPopulation, cosArctan, sinArctan, copyTopo, reverse } from "./util";
import { cellScale } from "./constants";

// Original source code @shawnbot/topogram
export default function () {
  var iterations = 8,
    projection = geoAlbers(),
    properties = function (id) {
      return {};
    },
    value = function (d) {
      return 1;
    };

  function cartogram(topology, geometries, cellDetails, populationData, year) {
    topology = copyTopo(topology);
    var tf = transformer(topology.transform),
      x,
      y,
      len1,
      i1,
      out1,
      len2 = topology.arcs.length,
      i2 = 0,
      projectedArcs = new Array(len2);
    while (i2 < len2) {
      x = 0;
      y = 0;
      len1 = topology.arcs[i2].length;
      i1 = 0;
      out1 = new Array(len1);
      while (i1 < len1) {
        topology.arcs[i2][i1][0] = x += topology.arcs[i2][i1][0];
        topology.arcs[i2][i1][1] = y += topology.arcs[i2][i1][1];
        out1[i1] =
          projection === null
            ? tf(topology.arcs[i2][i1])
            : projection(tf(topology.arcs[i2][i1]));
        i1++;
      }
      projectedArcs[i2++] = out1;
    }

    var path = geoPath().projection(null);

    var objects = object(projectedArcs, {
      type: "GeometryCollection",
      geometries: geometries,
    }).geometries.map(function (geom) {
      return {
        type: "Feature",
        id: geom.id,
        properties: properties.call(null, geom, topology),
        geometry: geom,
      };
    });

    var values = objects.map(value),
      totalValue = sum(values);

    var pFactor = populationFactor(cellDetails.scale, populationData, year);

    if (iterations <= 0) {
      return objects;
    }

    var i = 0;
    while (i++ < iterations) {
      var areas = objects.map(path.area);
      var totalArea = sum(areas),
        sizeErrorsTot = 0,
        sizeErrorsNum = 0,
        meta = objects.map(function (o, j) {
          var area = Math.abs(areas[j]),
            v = +values[j],
            desired = (totalArea * v) / (totalValue * pFactor),
            radius = Math.sqrt(area / Math.PI),
            mass = Math.sqrt(desired / Math.PI) - radius,
            sizeError = Math.max(area, desired) / Math.min(area, desired);
          sizeErrorsTot += sizeError;
          sizeErrorsNum++;
          return {
            id: o.id,
            area: area,
            centroid: path.centroid(o),
            value: v,
            desired: desired,
            radius: radius,
            mass: mass,
            sizeError: sizeError,
          };
        });

      var sizeError = sizeErrorsTot / sizeErrorsNum,
        forceReductionFactor = 1 / (1 + sizeError);

      var len1,
        i1,
        delta,
        len2 = projectedArcs.length,
        i2 = 0,
        delta,
        len3,
        i3,
        centroid,
        mass,
        radius,
        rSquared,
        dx,
        dy,
        distSquared,
        dist,
        Fij;
      while (i2 < len2) {
        len1 = projectedArcs[i2].length;
        i1 = 0;
        while (i1 < len1) {
          delta = [0, 0];
          len3 = meta.length;
          i3 = 0;
          while (i3 < len3) {
            centroid = meta[i3].centroid;
            mass = meta[i3].mass;
            radius = meta[i3].radius;
            rSquared = radius * radius;
            dx = projectedArcs[i2][i1][0] - centroid[0];
            dy = projectedArcs[i2][i1][1] - centroid[1];
            distSquared = dx * dx + dy * dy;
            dist = Math.sqrt(distSquared);
            Fij =
              dist > radius
                ? (mass * radius) / dist
                : mass * (distSquared / rSquared) * (4 - (3 * dist) / radius);
            delta[0] += Fij * cosArctan(dy, dx);
            delta[1] += Fij * sinArctan(dy, dx);
            i3++;
          }
          projectedArcs[i2][i1][0] += delta[0] * forceReductionFactor;
          projectedArcs[i2][i1][1] += delta[1] * forceReductionFactor;
          i1++;
        }
        i2++;
      }

      if (sizeError <= 1) break;
    }

    return {
      features: objects,
      arcs: projectedArcs,
    };
  }

  function populationFactor(selectedScale, populationData, year) {
    switch (selectedScale) {
      case cellScale.Fixed:
        var factor =
          getTotalPopulation(populationData, 2018) /
          getTotalPopulation(populationData, year) /
          1.6;
        if (factor > 0.8) {
          return factor;
        } else {
          return 1;
        }
      case cellScale.Fluid:
        return 1;
    }
  }

  function object(arcs, o) {
    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
        points.push(a[k]);
      }
      if (i < 0) reverse(points, n);
    }

    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      return points;
    }

    function polygon(arcs) {
      return arcs.map(line);
    }

    function geometry(o) {
      o = Object.create(o);
      o.coordinates = geometryType[o.type](o.arcs);
      return o;
    }

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function (arcs) {
        return arcs.map(polygon);
      },
    };

    return o.type === "GeometryCollection"
      ? ((o = Object.create(o)), (o.geometries = o.geometries.map(geometry)), o)
      : geometry(o);
  }

  cartogram.path = geoPath().projection(null);

  cartogram.iterations = function (i) {
    if (arguments.length) {
      iterations = i;
      return cartogram;
    } else {
      return iterations;
    }
  };

  cartogram.value = function (v) {
    if (arguments.length) {
      value = typeof v === "function" ? v : constant(v);
      return cartogram;
    } else {
      return value;
    }
  };

  cartogram.projection = function (p) {
    if (arguments.length) {
      projection = p;
      return cartogram;
    } else {
      return projection;
    }
  };

  cartogram.feature = function (topology, geom) {
    return {
      type: "Feature",
      id: geom.id,
      properties: properties.call(null, geom, topology),
      geometry: {
        type: geom.type,
        coordinates: topoFeature(topology, geom).geometry.coordinates,
      },
    };
  };

  cartogram.features = function (topo, geometries) {
    return geometries.map(function (f) {
      return cartogram.feature(topo, f);
    });
  };

  cartogram.properties = function (props) {
    if (arguments.length) {
      properties = typeof props === "function" ? props : constant(props);
      return cartogram;
    } else {
      return properties;
    }
  };

  function constant(x) {
    return function () {
      return x;
    };
  }

  var transformer = (cartogram.transformer = function (tf) {
    var kx = tf.scale[0],
      ky = tf.scale[1],
      dx = tf.translate[0],
      dy = tf.translate[1];

    function transform(c) {
      return [c[0] * kx + dx, c[1] * ky + dy];
    }

    transform.invert = function (c) {
      return [(c[0] - dx) / kx, (c[1] - dy) / ky];
    };

    return transform;
  });

  return cartogram;
}
