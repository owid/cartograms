// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d5kvp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var _export = require("./export");
var _plot = require("./core/plot");
document.querySelector('#loader').classList.add("hide");
let radiusInput = document.querySelector('input#radius');
let radiusButton = document.querySelector('input#select-radius');
let downloadButton = document.querySelector('#download');
let cellShapeButton = document.querySelector('#cell-shape');
let cellShapeInput = document.querySelector('#cell-shape-option');
let yearInput = document.querySelector('input#year');
let yearButton = document.querySelector('input#select-year');
radiusButton.addEventListener('click', ()=>{
    radiusInput = document.querySelector('input#radius');
    document.querySelector('#loader').classList.remove("hide");
    load();
});
yearButton.addEventListener('click', ()=>{
    yearInput = document.querySelector('input#year');
    document.querySelector('#loader').classList.remove("hide");
    load();
});
downloadButton.addEventListener('click', ()=>{
    let fileType = document.querySelector('#download-option').value;
    _export.download(fileType, yearInput.value);
});
cellShapeButton.addEventListener('click', ()=>{
    cellShapeInput = document.querySelector('#cell-shape-option');
    document.querySelector('#loader').classList.remove("hide");
    load();
});
function load() {
    let hexRadius = radiusInput.value;
    let cellShape = cellShapeInput.value;
    let year = yearInput.value;
    const topoData1 = d3.json('https://raw.githubusercontent.com/owid/cartograms/feature/square-grid/data/base/2018/v2/topo.json');
    const popData1 = d3.csv('https://raw.githubusercontent.com/owid/cartograms/feature/square-grid/data/population/unpd-flat.csv');
    Promise.all([
        topoData1,
        popData1
    ]).then((res)=>{
        let [topoData, popData] = res;
        _plot.render(topoData, popData, hexRadius, cellShape, year);
        document.querySelector('#loader').classList.add("hide");
    });
}
load();

},{"./export":"7IEvA","./core/plot":"fRvmN"}],"7IEvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "download", ()=>download
);
var _constants = require("./core/constants");
function download(fileType, year) {
    var filename = "cartogram" + year;
    switch(fileType){
        case _constants.outputFileType.GeoJSON:
            downloadObjectAsJson(exportJson, filename);
        case _constants.outputFileType.SVG:
            d3.select("#download").each(function() {
                d3.select(this).attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#container").html())).attr("download", filename + ".svg");
            });
    }
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./core/constants":"68kaV"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"68kaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colors", ()=>colors
);
parcelHelpers.export(exports, "margin", ()=>margin
);
parcelHelpers.export(exports, "width", ()=>width
);
parcelHelpers.export(exports, "height", ()=>height
);
parcelHelpers.export(exports, "strokeWidth", ()=>strokeWidth
);
parcelHelpers.export(exports, "cellAction", ()=>cellAction
);
parcelHelpers.export(exports, "cellPolygon", ()=>cellPolygon
);
parcelHelpers.export(exports, "outputFileType", ()=>outputFileType
);
const colors = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#ecf0f1',
    '#95a5a6',
    '#f39c12',
    '#d35400',
    '#c0392b',
    '#bdc3c7',
    '#7f8c8d'
];
const margin = {
    top: 15,
    right: 10,
    bottom: 15,
    left: 10
};
const width = 1350 - margin.left - margin.right;
const height = 750 - margin.top - margin.bottom;
const strokeWidth = 0.5;
const cellAction = {
    Add: 'Add',
    Remove: 'Remove'
};
const cellPolygon = {
    Hexagon: 'Hexagon',
    Square: 'Square'
};
const outputFileType = {
    SVG: 'SVG',
    GeoJSON: 'GeoJSON'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRvmN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exportJson", ()=>exportJson
);
parcelHelpers.export(exports, "render", ()=>render
);
var _d3Hexbin = require("d3-hexbin");
var _catogram = require("./catogram");
var _catogramDefault = parcelHelpers.interopDefault(_catogram);
var _shaper = require("./shaper");
var _events = require("./events");
var _constants = require("./constants");
var exportJson = {
    "type": "FeatureCollection",
    "features": []
};
function render(topo, populationData, radius, cellShape, year) {
    let shapeDistance = _shaper.getRadius(radius, cellShape);
    let cols = _constants.width / shapeDistance;
    let rows = _constants.height / shapeDistance;
    let pointGrid = d3.range(rows * cols).map(function(el, i) {
        return {
            x: Math.floor(i % cols) * shapeDistance,
            y: Math.floor(i / cols) * shapeDistance,
            datapoint: 0
        };
    });
    var populationJson = getData(populationData);
    var topo_cartogram = _catogramDefault.default().projection(null).properties(function(d) {
        return d.properties;
    }).value(function(d) {
        var currentValue = d.properties.count;
        return +currentValue;
    });
    topo_cartogram.features(topo, topo.objects.tiles.geometries);
    topo_cartogram.value(function(d) {
        var currentValue = populationJson[d.properties.id][year];
        return +currentValue;
    });
    var topoFeatures = topo_cartogram(topo, topo.objects.tiles.geometries).features;
    export_format(topoFeatures);
    let newHexbin = _d3Hexbin.hexbin().radius(radius).x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    });
    d3.select('#container').selectAll("*").remove();
    const svg = d3.select('#container').append('svg').attr('width', _constants.width + _constants.margin.left + _constants.margin.top).attr('height', _constants.height + _constants.margin.top + _constants.margin.bottom).append('g').attr('transform', `translate(${_constants.margin.left} ${_constants.margin.top})`);
    svg.append('g').attr('id', 'hexes').selectAll('.hex').data(_shaper.getGridData(cellShape, newHexbin, pointGrid)).enter().append('path').attr('class', 'hex').attr('transform', _shaper.getTransformation(cellShape)).attr('d', _shaper.getPath(cellShape, newHexbin, shapeDistance)).style('fill', '#fff').style('stroke', '#e0e0e0').style('stroke-width', _constants.strokeWidth).on("click", _events.mclickBase);
    let features = flatten_features(topoFeatures);
    for(let i1 = 0; i1 < features.length; i1++)for(let j = 0; j < features[i1].coordinates.length; j++){
        var polygonPoints = features[i1].coordinates[j];
        let usPoints = pointGrid.reduce(function(arr, el) {
            if (d3.polygonContains(polygonPoints, [
                el.x,
                el.y
            ])) arr.push(el);
            return arr;
        }, []);
        svg.append('g').attr('id', 'hexes').selectAll('.hex').data(_shaper.getGridData(cellShape, newHexbin, usPoints)).enter().append('path').attr('class', 'hex' + features[i1].properties.id).attr('transform', _shaper.getTransformation(cellShape)).attr("x", function(d) {
            return d.x;
        }).attr("y", function(d) {
            return d.y;
        }).attr('d', _shaper.getPath(cellShape, newHexbin, shapeDistance)).style('fill', _constants.colors[i1 % 19]).style('stroke', '#000').style('stroke-width', _constants.strokeWidth).on("click", _events.mclick).on("mouseover", _events.mover).on("mouseout", _events.mout).call(d3.drag().on("start", _events.dragstarted).on("drag", _events.dragged).on("end", _events.dragended));
    }
}
function getData(data) {
    var obj = {};
    for(var x in data)obj[data[x].code] = data[x];
    return obj;
}
function flatten_features(topoFeatures) {
    let features = [];
    for(let i = 0; i < topoFeatures.length; i++){
        var tempFeatures = [];
        if (topoFeatures[i].geometry.type == "MultiPolygon") for(let j = 0; j < topoFeatures[i].geometry.coordinates.length; j++)tempFeatures[j] = topoFeatures[i].geometry.coordinates[j][0];
        else if (topoFeatures[i].geometry.type == "Polygon") tempFeatures[0] = topoFeatures[i].geometry.coordinates[0];
        features[i] = {
            "coordinates": tempFeatures,
            "properties": topoFeatures[i].properties
        };
    }
    return features;
}
function export_format(topoFeatures) {
    for(let i = 0; i < topoFeatures.length; i++)if (topoFeatures[i].geometry.type == "MultiPolygon") {
        exportJson.features[i] = topoFeatures[i];
        exportJson.features[i].geometry.type = "MultiPolygon";
    } else {
        exportJson.features[i] = topoFeatures[i];
        exportJson.features[i].geometry.type = "Polygon";
    }
}

},{"d3-hexbin":"hSaFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./shaper":"jvMST","./catogram":"kKV7s","./events":"2MPtM","./constants":"68kaV"}],"hSaFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexbin", ()=>_hexbinDefault.default
);
var _hexbin = require("./src/hexbin");
var _hexbinDefault = parcelHelpers.interopDefault(_hexbin);

},{"./src/hexbin":"Xi36n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Xi36n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var thirdPi = Math.PI / 3, angles = [
    0,
    thirdPi,
    2 * thirdPi,
    3 * thirdPi,
    4 * thirdPi,
    5 * thirdPi
];
function pointX(d) {
    return d[0];
}
function pointY(d) {
    return d[1];
}
exports.default = function() {
    var x01 = 0, y01 = 0, x11 = 1, y11 = 1, x2 = pointX, y2 = pointY, r, dx1, dy1;
    function hexbin(points) {
        var binsById = {}, bins = [], i, n = points.length;
        for(i = 0; i < n; ++i){
            if (isNaN(px = +x2.call(null, point = points[i], i, points)) || isNaN(py = +y2.call(null, point, i, points))) continue;
            var point, px, py, pj = Math.round(py = py / dy1), pi = Math.round(px = px / dx1 - (pj & 1) / 2), py1 = py - pj;
            if (Math.abs(py1) * 3 > 1) {
                var px1 = px - pi, pi2 = pi + (px < pi ? -1 : 1) / 2, pj2 = pj + (py < pj ? -1 : 1), px2 = px - pi2, py2 = py - pj2;
                if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
            }
            var id = pi + "-" + pj, bin = binsById[id];
            if (bin) bin.push(point);
            else {
                bins.push(bin = binsById[id] = [
                    point
                ]);
                bin.x = (pi + (pj & 1) / 2) * dx1;
                bin.y = pj * dy1;
            }
        }
        return bins;
    }
    function hexagon(radius) {
        var x0 = 0, y0 = 0;
        return angles.map(function(angle) {
            var x1 = Math.sin(angle) * radius, y1 = -Math.cos(angle) * radius, dx = x1 - x0, dy = y1 - y0;
            x0 = x1, y0 = y1;
            return [
                dx,
                dy
            ];
        });
    }
    hexbin.hexagon = function(radius) {
        return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
    };
    hexbin.centers = function() {
        var centers = [], j = Math.round(y01 / dy1), i = Math.round(x01 / dx1);
        for(var y = j * dy1; y < y11 + r; y += dy1, ++j)for(var x = i * dx1 + (j & 1) * dx1 / 2; x < x11 + dx1 / 2; x += dx1)centers.push([
            x,
            y
        ]);
        return centers;
    };
    hexbin.mesh = function() {
        var fragment = hexagon(r).slice(0, 4).join("l");
        return hexbin.centers().map(function(p) {
            return "M" + p + "m" + fragment;
        }).join("");
    };
    hexbin.x = function(_) {
        return arguments.length ? (x2 = _, hexbin) : x2;
    };
    hexbin.y = function(_) {
        return arguments.length ? (y2 = _, hexbin) : y2;
    };
    hexbin.radius = function(_) {
        return arguments.length ? (r = +_, dx1 = r * 2 * Math.sin(thirdPi), dy1 = r * 1.5, hexbin) : r;
    };
    hexbin.size = function(_) {
        return arguments.length ? (x01 = y01 = 0, x11 = +_[0], y11 = +_[1], hexbin) : [
            x11 - x01,
            y11 - y01
        ];
    };
    hexbin.extent = function(_) {
        return arguments.length ? (x01 = +_[0][0], y01 = +_[0][1], x11 = +_[1][0], y11 = +_[1][1], hexbin) : [
            [
                x01,
                y01
            ],
            [
                x11,
                y11
            ]
        ];
    };
    return hexbin.radius(1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvMST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rightRoundedRect", ()=>rightRoundedRect
);
parcelHelpers.export(exports, "getRadius", ()=>getRadius
);
parcelHelpers.export(exports, "getGridData", ()=>getGridData
);
parcelHelpers.export(exports, "getPath", ()=>getPath
);
parcelHelpers.export(exports, "getTransformation", ()=>getTransformation
);
parcelHelpers.export(exports, "getNearestSlot", ()=>getNearestSlot
);
var _constants = require("./constants");
function rightRoundedRect(x, y, width, height, radius) {
    return "M" + x + "," + y + "h" + (width - radius) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + "v" + (height - 2 * radius) + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius + "h" + (radius - width) + "z";
}
function getRadius(radius, cellShape) {
    switch(cellShape){
        case _constants.cellPolygon.Hexagon:
            return radius * 1.5;
        case _constants.cellPolygon.Square:
            return radius * 2;
    }
}
function getGridData(cellShape, bin, grid) {
    switch(cellShape){
        case _constants.cellPolygon.Hexagon:
            return bin(grid);
        case _constants.cellPolygon.Square:
            return grid;
    }
}
function getPath(cellShape, bin, distance) {
    switch(cellShape){
        case _constants.cellPolygon.Hexagon:
            return bin.hexagon();
        case _constants.cellPolygon.Square:
            return function(d) {
                return rightRoundedRect(d.x / 2, d.y / 2, distance, distance, 0);
            };
    }
}
function getTransformation(cellShape) {
    switch(cellShape){
        case _constants.cellPolygon.Hexagon:
            return function(d) {
                return 'translate(' + d.x + ', ' + d.y + ')';
            };
        case _constants.cellPolygon.Square:
            return function(d) {
                return 'translate(' + d.x / 2 + ', ' + d.y / 2 + ')';
            };
    }
}
function getNearestSlot(x, y, n, cellShape) {
    switch(cellShape){
        case _constants.cellPolygon.Hexagon:
            var gridx;
            var gridy;
            var factor = Math.sqrt(3) / 2;
            var d = n * 2;
            var sx = d * factor;
            var sy = n * 3;
            if (y % sy < n) {
                gridy = y - y % sy;
                gridx = x - x % sx;
            } else {
                gridy = y + (d - n * factor / 2) - y % sy;
                gridx = x + n * factor - x % sx;
            }
            return [
                gridx,
                gridy
            ];
        case _constants.cellPolygon.Square:
            var gridx;
            var gridy;
            var sx = n * 2;
            var sy = n * 2;
            gridy = y - y % sy;
            gridx = x - x % sx;
            return [
                gridx,
                gridy
            ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./constants":"68kaV"}],"kKV7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _d3Geo = require("d3-geo");
var _topojsonClient = require("topojson-client");
// Original source code @shawnbot/topogram
exports.default = function() {
    var iterations = 8, projection = _d3Geo.geoAlbers(), properties = function(id) {
        return {};
    }, value = function(d) {
        return 1;
    };
    function cartogram(topology, geometries) {
        topology = copy(topology);
        var tf = transformer(topology.transform), x, y, len1, i1, out1, len2 = topology.arcs.length, i2 = 0, projectedArcs = new Array(len2);
        while(i2 < len2){
            x = 0;
            y = 0;
            len1 = topology.arcs[i2].length;
            i1 = 0;
            out1 = new Array(len1);
            while(i1 < len1){
                topology.arcs[i2][i1][0] = x += topology.arcs[i2][i1][0];
                topology.arcs[i2][i1][1] = y += topology.arcs[i2][i1][1];
                out1[i1] = projection === null ? tf(topology.arcs[i2][i1]) : projection(tf(topology.arcs[i2][i1]));
                i1++;
            }
            projectedArcs[i2++] = out1;
        }
        var path = _d3Geo.geoPath().projection(null);
        var objects = object(projectedArcs, {
            type: "GeometryCollection",
            geometries: geometries
        }).geometries.map(function(geom) {
            return {
                type: "Feature",
                id: geom.id,
                properties: properties.call(null, geom, topology),
                geometry: geom
            };
        });
        var values = objects.map(value), totalValue = _d3Array.sum(values);
        if (iterations <= 0) return objects;
        var i = 0;
        while((i++) < iterations){
            var areas = objects.map(path.area);
            var totalArea = _d3Array.sum(areas), sizeErrorsTot = 0, sizeErrorsNum = 0, meta = objects.map(function(o, j) {
                var area = Math.abs(areas[j]), v = +values[j], desired = totalArea * v / totalValue, radius = Math.sqrt(area / Math.PI), mass = Math.sqrt(desired / Math.PI) - radius, sizeError = Math.max(area, desired) / Math.min(area, desired);
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
                    sizeError: sizeError
                };
            });
            var sizeError1 = sizeErrorsTot / sizeErrorsNum, forceReductionFactor = 1 / (1 + sizeError1);
            var len1, i1, delta, len2 = projectedArcs.length, i2 = 0, delta, len3, i3, centroid, mass1, radius1, rSquared, dx, dy, distSquared, dist, Fij;
            while(i2 < len2){
                len1 = projectedArcs[i2].length;
                i1 = 0;
                while(i1 < len1){
                    delta = [
                        0,
                        0
                    ];
                    len3 = meta.length;
                    i3 = 0;
                    while(i3 < len3){
                        centroid = meta[i3].centroid;
                        mass1 = meta[i3].mass;
                        radius1 = meta[i3].radius;
                        rSquared = radius1 * radius1;
                        dx = projectedArcs[i2][i1][0] - centroid[0];
                        dy = projectedArcs[i2][i1][1] - centroid[1];
                        distSquared = dx * dx + dy * dy;
                        dist = Math.sqrt(distSquared);
                        Fij = dist > radius1 ? mass1 * radius1 / dist : mass1 * (distSquared / rSquared) * (4 - 3 * dist / radius1);
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
            if (sizeError1 <= 1) break;
        }
        return {
            features: objects,
            arcs: projectedArcs
        };
    }
    function cosArctan(dx, dy) {
        if (dy === 0) return 0;
        var div = dx / dy;
        return dy > 0 ? 1 / Math.sqrt(1 + div * div) : -1 / Math.sqrt(1 + div * div);
    }
    function sinArctan(dx, dy) {
        if (dy === 0) return 1;
        var div = dx / dy;
        return dy > 0 ? div / Math.sqrt(1 + div * div) : -div / Math.sqrt(1 + div * div);
    }
    function copy(o) {
        return o instanceof Array ? o.map(copy) : typeof o === "string" || typeof o === "number" ? o : copyObject(o);
    }
    function copyObject(o) {
        var obj = {};
        for(var k in o)obj[k] = copy(o[k]);
        return obj;
    }
    function object(arcs1, o1) {
        function arc(i, points) {
            if (points.length) points.pop();
            for(var a = arcs1[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k)points.push(a[k]);
            if (i < 0) reverse(points, n);
        }
        function line(arcs) {
            var points = [];
            for(var i = 0, n = arcs.length; i < n; ++i)arc(arcs[i], points);
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
            MultiPolygon: function(arcs) {
                return arcs.map(polygon);
            }
        };
        return o1.type === "GeometryCollection" ? (o1 = Object.create(o1), o1.geometries = o1.geometries.map(geometry), o1) : geometry(o1);
    }
    function reverse(array, n) {
        var t, j = array.length, i = j - n;
        while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
    }
    cartogram.path = _d3Geo.geoPath().projection(null);
    cartogram.iterations = function(i) {
        if (arguments.length) {
            iterations = i;
            return cartogram;
        } else return iterations;
    };
    cartogram.value = function(v) {
        if (arguments.length) {
            value = typeof v === "function" ? v : constant(v);
            return cartogram;
        } else return value;
    };
    cartogram.projection = function(p) {
        if (arguments.length) {
            projection = p;
            return cartogram;
        } else return projection;
    };
    cartogram.feature = function(topology, geom) {
        return {
            type: "Feature",
            id: geom.id,
            properties: properties.call(null, geom, topology),
            geometry: {
                type: geom.type,
                coordinates: _topojsonClient.feature(topology, geom).geometry.coordinates
            }
        };
    };
    cartogram.features = function(topo, geometries) {
        return geometries.map(function(f) {
            return cartogram.feature(topo, f);
        });
    };
    cartogram.properties = function(props) {
        if (arguments.length) {
            properties = typeof props === "function" ? props : constant(props);
            return cartogram;
        } else return properties;
    };
    function constant(x) {
        return function() {
            return x;
        };
    }
    var transformer = cartogram.transformer = function(tf) {
        var kx = tf.scale[0], ky = tf.scale[1], dx = tf.translate[0], dy = tf.translate[1];
        function transform(c) {
            return [
                c[0] * kx + dx,
                c[1] * ky + dy
            ];
        }
        transform.invert = function(c) {
            return [
                (c[0] - dx) / kx,
                (c[1] - dy) / ky
            ];
        };
        return transform;
    };
    return cartogram;
};

},{"d3-array":"1yX2W","d3-geo":"01Z75","topojson-client":"ciUQq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yX2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>_bisectJsDefault.default
);
parcelHelpers.export(exports, "bisectRight", ()=>_bisectJs.bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>_bisectJs.bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>_bisectJs.bisectCenter
);
parcelHelpers.export(exports, "ascending", ()=>_ascendingJsDefault.default
);
parcelHelpers.export(exports, "bisector", ()=>_bisectorJsDefault.default
);
parcelHelpers.export(exports, "count", ()=>_countJsDefault.default
);
parcelHelpers.export(exports, "cross", ()=>_crossJsDefault.default
);
parcelHelpers.export(exports, "cumsum", ()=>_cumsumJsDefault.default
);
parcelHelpers.export(exports, "descending", ()=>_descendingJsDefault.default
);
parcelHelpers.export(exports, "deviation", ()=>_deviationJsDefault.default
);
parcelHelpers.export(exports, "extent", ()=>_extentJsDefault.default
);
parcelHelpers.export(exports, "Adder", ()=>_fsumJs.Adder
);
parcelHelpers.export(exports, "fsum", ()=>_fsumJs.fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>_fsumJs.fcumsum
);
parcelHelpers.export(exports, "group", ()=>_groupJsDefault.default
);
parcelHelpers.export(exports, "flatGroup", ()=>_groupJs.flatGroup
);
parcelHelpers.export(exports, "flatRollup", ()=>_groupJs.flatRollup
);
parcelHelpers.export(exports, "groups", ()=>_groupJs.groups
);
parcelHelpers.export(exports, "index", ()=>_groupJs.index
);
parcelHelpers.export(exports, "indexes", ()=>_groupJs.indexes
);
parcelHelpers.export(exports, "rollup", ()=>_groupJs.rollup
);
parcelHelpers.export(exports, "rollups", ()=>_groupJs.rollups
);
parcelHelpers.export(exports, "groupSort", ()=>_groupSortJsDefault.default
);
parcelHelpers.export(exports, "bin", ()=>_binJsDefault.default
) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>_binJsDefault.default
);
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>_freedmanDiaconisJsDefault.default
);
parcelHelpers.export(exports, "thresholdScott", ()=>_scottJsDefault.default
);
parcelHelpers.export(exports, "thresholdSturges", ()=>_sturgesJsDefault.default
);
parcelHelpers.export(exports, "max", ()=>_maxJsDefault.default
);
parcelHelpers.export(exports, "maxIndex", ()=>_maxIndexJsDefault.default
);
parcelHelpers.export(exports, "mean", ()=>_meanJsDefault.default
);
parcelHelpers.export(exports, "median", ()=>_medianJsDefault.default
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "min", ()=>_minJsDefault.default
);
parcelHelpers.export(exports, "minIndex", ()=>_minIndexJsDefault.default
);
parcelHelpers.export(exports, "mode", ()=>_modeJsDefault.default
);
parcelHelpers.export(exports, "nice", ()=>_niceJsDefault.default
);
parcelHelpers.export(exports, "pairs", ()=>_pairsJsDefault.default
);
parcelHelpers.export(exports, "permute", ()=>_permuteJsDefault.default
);
parcelHelpers.export(exports, "quantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "quantileSorted", ()=>_quantileJs.quantileSorted
);
parcelHelpers.export(exports, "quickselect", ()=>_quickselectJsDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "rank", ()=>_rankJsDefault.default
);
parcelHelpers.export(exports, "least", ()=>_leastJsDefault.default
);
parcelHelpers.export(exports, "leastIndex", ()=>_leastIndexJsDefault.default
);
parcelHelpers.export(exports, "greatest", ()=>_greatestJsDefault.default
);
parcelHelpers.export(exports, "greatestIndex", ()=>_greatestIndexJsDefault.default
);
parcelHelpers.export(exports, "scan", ()=>_scanJsDefault.default
) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>_shuffleJsDefault.default
);
parcelHelpers.export(exports, "shuffler", ()=>_shuffleJs.shuffler
);
parcelHelpers.export(exports, "sum", ()=>_sumJsDefault.default
);
parcelHelpers.export(exports, "ticks", ()=>_ticksJsDefault.default
);
parcelHelpers.export(exports, "tickIncrement", ()=>_ticksJs.tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>_ticksJs.tickStep
);
parcelHelpers.export(exports, "transpose", ()=>_transposeJsDefault.default
);
parcelHelpers.export(exports, "variance", ()=>_varianceJsDefault.default
);
parcelHelpers.export(exports, "zip", ()=>_zipJsDefault.default
);
parcelHelpers.export(exports, "every", ()=>_everyJsDefault.default
);
parcelHelpers.export(exports, "some", ()=>_someJsDefault.default
);
parcelHelpers.export(exports, "filter", ()=>_filterJsDefault.default
);
parcelHelpers.export(exports, "map", ()=>_mapJsDefault.default
);
parcelHelpers.export(exports, "reduce", ()=>_reduceJsDefault.default
);
parcelHelpers.export(exports, "reverse", ()=>_reverseJsDefault.default
);
parcelHelpers.export(exports, "sort", ()=>_sortJsDefault.default
);
parcelHelpers.export(exports, "difference", ()=>_differenceJsDefault.default
);
parcelHelpers.export(exports, "disjoint", ()=>_disjointJsDefault.default
);
parcelHelpers.export(exports, "intersection", ()=>_intersectionJsDefault.default
);
parcelHelpers.export(exports, "subset", ()=>_subsetJsDefault.default
);
parcelHelpers.export(exports, "superset", ()=>_supersetJsDefault.default
);
parcelHelpers.export(exports, "union", ()=>_unionJsDefault.default
);
parcelHelpers.export(exports, "InternMap", ()=>_internmap.InternMap
);
parcelHelpers.export(exports, "InternSet", ()=>_internmap.InternSet
);
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":false,"./ascending.js":false,"./bisector.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":false,"./fsum.js":"7NEFi","./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":false,"./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":"hviMC","./min.js":false,"./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":false,"./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":"47K1s","./ticks.js":false,"./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NEFi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
parcelHelpers.export(exports, "Adder", ()=>Adder
);
parcelHelpers.export(exports, "fsum", ()=>fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum
);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0)
     : (v)=>adder.add(+valueof(v, ++index, values) || 0)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hviMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47K1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sum(values, valueof) {
    let sum1 = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum1 += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum1 += value;
    }
    return sum1;
}
exports.default = sum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Z75":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>_areaJsDefault.default
);
parcelHelpers.export(exports, "geoBounds", ()=>_boundsJsDefault.default
);
parcelHelpers.export(exports, "geoCentroid", ()=>_centroidJsDefault.default
);
parcelHelpers.export(exports, "geoCircle", ()=>_circleJsDefault.default
);
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>_antimeridianJsDefault.default
);
parcelHelpers.export(exports, "geoClipCircle", ()=>_circleJsDefault1.default
);
parcelHelpers.export(exports, "geoClipExtent", ()=>_extentJsDefault.default
) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>_rectangleJsDefault.default
);
parcelHelpers.export(exports, "geoContains", ()=>_containsJsDefault.default
);
parcelHelpers.export(exports, "geoDistance", ()=>_distanceJsDefault.default
);
parcelHelpers.export(exports, "geoGraticule", ()=>_graticuleJsDefault.default
);
parcelHelpers.export(exports, "geoGraticule10", ()=>_graticuleJs.graticule10
);
parcelHelpers.export(exports, "geoInterpolate", ()=>_interpolateJsDefault.default
);
parcelHelpers.export(exports, "geoLength", ()=>_lengthJsDefault.default
);
parcelHelpers.export(exports, "geoPath", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "geoAlbers", ()=>_albersJsDefault.default
);
parcelHelpers.export(exports, "geoAlbersUsa", ()=>_albersUsaJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>_azimuthalEqualAreaJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>_azimuthalEqualAreaJs.azimuthalEqualAreaRaw
);
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>_azimuthalEquidistantJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>_azimuthalEquidistantJs.azimuthalEquidistantRaw
);
parcelHelpers.export(exports, "geoConicConformal", ()=>_conicConformalJsDefault.default
);
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>_conicConformalJs.conicConformalRaw
);
parcelHelpers.export(exports, "geoConicEqualArea", ()=>_conicEqualAreaJsDefault.default
);
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>_conicEqualAreaJs.conicEqualAreaRaw
);
parcelHelpers.export(exports, "geoConicEquidistant", ()=>_conicEquidistantJsDefault.default
);
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>_conicEquidistantJs.conicEquidistantRaw
);
parcelHelpers.export(exports, "geoEqualEarth", ()=>_equalEarthJsDefault.default
);
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>_equalEarthJs.equalEarthRaw
);
parcelHelpers.export(exports, "geoEquirectangular", ()=>_equirectangularJsDefault.default
);
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>_equirectangularJs.equirectangularRaw
);
parcelHelpers.export(exports, "geoGnomonic", ()=>_gnomonicJsDefault.default
);
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>_gnomonicJs.gnomonicRaw
);
parcelHelpers.export(exports, "geoIdentity", ()=>_identityJsDefault.default
);
parcelHelpers.export(exports, "geoProjection", ()=>_indexJsDefault1.default
);
parcelHelpers.export(exports, "geoProjectionMutator", ()=>_indexJs1.projectionMutator
);
parcelHelpers.export(exports, "geoMercator", ()=>_mercatorJsDefault.default
);
parcelHelpers.export(exports, "geoMercatorRaw", ()=>_mercatorJs.mercatorRaw
);
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>_naturalEarth1JsDefault.default
);
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>_naturalEarth1Js.naturalEarth1Raw
);
parcelHelpers.export(exports, "geoOrthographic", ()=>_orthographicJsDefault.default
);
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>_orthographicJs.orthographicRaw
);
parcelHelpers.export(exports, "geoStereographic", ()=>_stereographicJsDefault.default
);
parcelHelpers.export(exports, "geoStereographicRaw", ()=>_stereographicJs.stereographicRaw
);
parcelHelpers.export(exports, "geoTransverseMercator", ()=>_transverseMercatorJsDefault.default
);
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>_transverseMercatorJs.transverseMercatorRaw
);
parcelHelpers.export(exports, "geoRotation", ()=>_rotationJsDefault.default
);
parcelHelpers.export(exports, "geoStream", ()=>_streamJsDefault.default
);
parcelHelpers.export(exports, "geoTransform", ()=>_transformJsDefault.default
);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _circleJs = require("./circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _antimeridianJs = require("./clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs1 = require("./clip/circle.js");
var _circleJsDefault1 = parcelHelpers.interopDefault(_circleJs1);
var _extentJs = require("./clip/extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _rectangleJs = require("./clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _graticuleJs = require("./graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _indexJs = require("./path/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _albersJs = require("./projection/albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _albersUsaJs = require("./projection/albersUsa.js");
var _albersUsaJsDefault = parcelHelpers.interopDefault(_albersUsaJs);
var _azimuthalEqualAreaJs = require("./projection/azimuthalEqualArea.js");
var _azimuthalEqualAreaJsDefault = parcelHelpers.interopDefault(_azimuthalEqualAreaJs);
var _azimuthalEquidistantJs = require("./projection/azimuthalEquidistant.js");
var _azimuthalEquidistantJsDefault = parcelHelpers.interopDefault(_azimuthalEquidistantJs);
var _conicConformalJs = require("./projection/conicConformal.js");
var _conicConformalJsDefault = parcelHelpers.interopDefault(_conicConformalJs);
var _conicEqualAreaJs = require("./projection/conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _conicEquidistantJs = require("./projection/conicEquidistant.js");
var _conicEquidistantJsDefault = parcelHelpers.interopDefault(_conicEquidistantJs);
var _equalEarthJs = require("./projection/equalEarth.js");
var _equalEarthJsDefault = parcelHelpers.interopDefault(_equalEarthJs);
var _equirectangularJs = require("./projection/equirectangular.js");
var _equirectangularJsDefault = parcelHelpers.interopDefault(_equirectangularJs);
var _gnomonicJs = require("./projection/gnomonic.js");
var _gnomonicJsDefault = parcelHelpers.interopDefault(_gnomonicJs);
var _identityJs = require("./projection/identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _indexJs1 = require("./projection/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _mercatorJs = require("./projection/mercator.js");
var _mercatorJsDefault = parcelHelpers.interopDefault(_mercatorJs);
var _naturalEarth1Js = require("./projection/naturalEarth1.js");
var _naturalEarth1JsDefault = parcelHelpers.interopDefault(_naturalEarth1Js);
var _orthographicJs = require("./projection/orthographic.js");
var _orthographicJsDefault = parcelHelpers.interopDefault(_orthographicJs);
var _stereographicJs = require("./projection/stereographic.js");
var _stereographicJsDefault = parcelHelpers.interopDefault(_stereographicJs);
var _transverseMercatorJs = require("./projection/transverseMercator.js");
var _transverseMercatorJsDefault = parcelHelpers.interopDefault(_transverseMercatorJs);
var _rotationJs = require("./rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./area.js":false,"./bounds.js":false,"./centroid.js":false,"./circle.js":"b6BNx","./clip/antimeridian.js":"5Pn7h","./clip/circle.js":"6JGCr","./clip/extent.js":false,"./clip/rectangle.js":"5auAi","./contains.js":false,"./distance.js":false,"./graticule.js":false,"./interpolate.js":false,"./length.js":false,"./path/index.js":"lnhfi","./projection/albers.js":"bvQZA","./projection/albersUsa.js":false,"./projection/azimuthalEqualArea.js":false,"./projection/azimuthalEquidistant.js":false,"./projection/conicConformal.js":false,"./projection/conicEqualArea.js":"cfI84","./projection/conicEquidistant.js":false,"./projection/equalEarth.js":false,"./projection/equirectangular.js":false,"./projection/gnomonic.js":false,"./projection/identity.js":false,"./projection/index.js":"gSlbx","./projection/mercator.js":false,"./projection/naturalEarth1.js":false,"./projection/orthographic.js":false,"./projection/stereographic.js":false,"./projection/transverseMercator.js":false,"./rotation.js":"g2pLL","./stream.js":"lpKxD","./transform.js":"AaiPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6BNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Generates a circle centered at [0°, 0°], with a given radius and precision.
parcelHelpers.export(exports, "circleStream", ()=>circleStream
);
var _cartesianJs = require("./cartesian.js");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _mathJs = require("./math.js");
var _rotationJs = require("./rotation.js");
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = _mathJs.cos(radius), sinRadius = _mathJs.sin(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * _mathJs.tau;
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _mathJs.tau;
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = _cartesianJs.spherical([
            cosRadius,
            -sinRadius * _mathJs.cos(t),
            -sinRadius * _mathJs.sin(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = _cartesianJs.cartesian(point), point[0] -= cosRadius;
    _cartesianJs.cartesianNormalizeInPlace(point);
    var radius = _mathJs.acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + _mathJs.tau - _mathJs.epsilon) % _mathJs.tau;
}
exports.default = function() {
    var center = _constantJsDefault.default([
        0,
        0
    ]), radius = _constantJsDefault.default(90), precision = _constantJsDefault.default(6), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= _mathJs.degrees, x[1] *= _mathJs.degrees;
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * _mathJs.radians, p = precision.apply(this, arguments) * _mathJs.radians;
        ring = [];
        rotate = _rotationJs.rotateRadians(-c[0] * _mathJs.radians, -c[1] * _mathJs.radians, 0).invert;
        circleStream(stream, r, p, 1);
        c = {
            type: "Polygon",
            coordinates: [
                ring
            ]
        };
        ring = rotate = null;
        return c;
    }
    circle.center = function(_) {
        return arguments.length ? (center = typeof _ === "function" ? _ : _constantJsDefault.default([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : _constantJsDefault.default(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : _constantJsDefault.default(+_), circle) : precision;
    };
    return circle;
};

},{"./cartesian.js":"4Lw8W","./constant.js":"1uZ9u","./math.js":"8TMeU","./rotation.js":"g2pLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lw8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spherical", ()=>spherical
);
parcelHelpers.export(exports, "cartesian", ()=>cartesian
);
parcelHelpers.export(exports, "cartesianDot", ()=>cartesianDot
);
parcelHelpers.export(exports, "cartesianCross", ()=>cartesianCross
);
// TODO return a
parcelHelpers.export(exports, "cartesianAddInPlace", ()=>cartesianAddInPlace
);
parcelHelpers.export(exports, "cartesianScale", ()=>cartesianScale
);
// TODO return d
parcelHelpers.export(exports, "cartesianNormalizeInPlace", ()=>cartesianNormalizeInPlace
);
var _mathJs = require("./math.js");
function spherical(cartesian1) {
    return [
        _mathJs.atan2(cartesian1[1], cartesian1[0]),
        _mathJs.asin(cartesian1[2])
    ];
}
function cartesian(spherical1) {
    var lambda = spherical1[0], phi = spherical1[1], cosPhi = _mathJs.cos(phi);
    return [
        cosPhi * _mathJs.cos(lambda),
        cosPhi * _mathJs.sin(lambda),
        _mathJs.sin(phi)
    ];
}
function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function cartesianNormalizeInPlace(d) {
    var l = _mathJs.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TMeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon
);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2
);
parcelHelpers.export(exports, "pi", ()=>pi
);
parcelHelpers.export(exports, "halfPi", ()=>halfPi
);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi
);
parcelHelpers.export(exports, "tau", ()=>tau
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
parcelHelpers.export(exports, "radians", ()=>radians
);
parcelHelpers.export(exports, "abs", ()=>abs
);
parcelHelpers.export(exports, "atan", ()=>atan
);
parcelHelpers.export(exports, "atan2", ()=>atan2
);
parcelHelpers.export(exports, "cos", ()=>cos
);
parcelHelpers.export(exports, "ceil", ()=>ceil
);
parcelHelpers.export(exports, "exp", ()=>exp
);
parcelHelpers.export(exports, "floor", ()=>floor
);
parcelHelpers.export(exports, "hypot", ()=>hypot
);
parcelHelpers.export(exports, "log", ()=>log
);
parcelHelpers.export(exports, "pow", ()=>pow
);
parcelHelpers.export(exports, "sin", ()=>sin
);
parcelHelpers.export(exports, "sign", ()=>sign
);
parcelHelpers.export(exports, "sqrt", ()=>sqrt
);
parcelHelpers.export(exports, "tan", ()=>tan
);
parcelHelpers.export(exports, "acos", ()=>acos
);
parcelHelpers.export(exports, "asin", ()=>asin
);
parcelHelpers.export(exports, "haversin", ()=>haversin
);
var epsilon = 0.000001;
var epsilon2 = 0.000000000001;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uZ9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2pLL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotateRadians", ()=>rotateRadians
);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _mathJs = require("./math.js");
function rotationIdentity(lambda, phi) {
    return [
        _mathJs.abs(lambda) > _mathJs.pi ? lambda + Math.round(-lambda / _mathJs.tau) * _mathJs.tau : lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= _mathJs.tau) ? deltaPhi || deltaGamma ? _composeJsDefault.default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        return lambda += deltaLambda, [
            lambda > _mathJs.pi ? lambda - _mathJs.tau : lambda < -_mathJs.pi ? lambda + _mathJs.tau : lambda,
            phi
        ];
    };
}
function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = _mathJs.cos(deltaPhi), sinDeltaPhi = _mathJs.sin(deltaPhi), cosDeltaGamma = _mathJs.cos(deltaGamma), sinDeltaGamma = _mathJs.sin(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = _mathJs.cos(phi), x = _mathJs.cos(lambda) * cosPhi, y = _mathJs.sin(lambda) * cosPhi, z = _mathJs.sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            _mathJs.atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            _mathJs.asin(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = _mathJs.cos(phi), x = _mathJs.cos(lambda) * cosPhi, y = _mathJs.sin(lambda) * cosPhi, z = _mathJs.sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            _mathJs.atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            _mathJs.asin(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
exports.default = function(rotate) {
    rotate = rotateRadians(rotate[0] * _mathJs.radians, rotate[1] * _mathJs.radians, rotate.length > 2 ? rotate[2] * _mathJs.radians : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * _mathJs.radians, coordinates[1] * _mathJs.radians);
        return coordinates[0] *= _mathJs.degrees, coordinates[1] *= _mathJs.degrees, coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * _mathJs.radians, coordinates[1] * _mathJs.radians);
        return coordinates[0] *= _mathJs.degrees, coordinates[1] *= _mathJs.degrees, coordinates;
    };
    return forward;
};

},{"./compose.js":"lJD5n","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJD5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    function compose(x, y) {
        return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Pn7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
exports.default = _indexJsDefault.default(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -_mathJs.pi,
    -_mathJs.halfPi
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? _mathJs.pi : -_mathJs.pi, delta = _mathJs.abs(lambda1 - lambda0);
            if (_mathJs.abs(delta - _mathJs.pi) < _mathJs.epsilon) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _mathJs.halfPi : -_mathJs.halfPi);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= _mathJs.pi) {
                if (_mathJs.abs(lambda0 - sign0) < _mathJs.epsilon) lambda0 -= sign0 * _mathJs.epsilon; // handle degeneracies
                if (_mathJs.abs(lambda1 - sign1) < _mathJs.epsilon) lambda1 -= sign1 * _mathJs.epsilon;
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = _mathJs.sin(lambda0 - lambda1);
    return _mathJs.abs(sinLambda0Lambda1) > _mathJs.epsilon ? _mathJs.atan((_mathJs.sin(phi0) * (cosPhi1 = _mathJs.cos(phi1)) * _mathJs.sin(lambda1) - _mathJs.sin(phi1) * (cosPhi0 = _mathJs.cos(phi0)) * _mathJs.sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * _mathJs.halfPi;
        stream.point(-_mathJs.pi, phi);
        stream.point(0, phi);
        stream.point(_mathJs.pi, phi);
        stream.point(_mathJs.pi, 0);
        stream.point(_mathJs.pi, -phi);
        stream.point(0, -phi);
        stream.point(-_mathJs.pi, -phi);
        stream.point(-_mathJs.pi, 0);
        stream.point(-_mathJs.pi, phi);
    } else if (_mathJs.abs(from[0] - to[0]) > _mathJs.epsilon) {
        var lambda = from[0] < to[0] ? _mathJs.pi : -_mathJs.pi;
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

},{"./index.js":"bCtcN","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCtcN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _mathJs = require("../math.js");
var _polygonContainsJs = require("../polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _d3Array = require("d3-array");
exports.default = function(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = _bufferJsDefault.default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point1,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
            },
            polygonEnd: function() {
                clip.point = point1;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = _d3Array.merge(segments);
                var startInside = _polygonContainsJsDefault.default(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    _rejoinJsDefault.default(segments, compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
            },
            sphere: function() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
            }
        };
        function point1(lambda, phi) {
            if (pointVisible(lambda, phi)) sink.point(lambda, phi);
        }
        function pointLine(lambda, phi) {
            line.point(lambda, phi);
        }
        function lineStart() {
            clip.point = pointLine;
            line.lineStart();
        }
        function lineEnd() {
            clip.point = point1;
            line.lineEnd();
        }
        function pointRing(lambda, phi) {
            ring.push([
                lambda,
                phi
            ]);
            ringSink.point(lambda, phi);
        }
        function ringStart() {
            ringSink.lineStart();
            ring = [];
        }
        function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            // No intersections.
            if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                    sink.lineEnd();
                }
                return;
            }
            // Rejoin connected segments.
            // TODO reuse ringBuffer.rejoin()?
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(validSegment));
        }
        return clip;
    };
};
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - _mathJs.halfPi - _mathJs.epsilon : _mathJs.halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - _mathJs.halfPi - _mathJs.epsilon : _mathJs.halfPi - b[1]);
}

},{"./buffer.js":"6MwC2","./rejoin.js":"4Cpqb","../math.js":"8TMeU","../polygonContains.js":"k8u1G","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
exports.default = function() {
    var lines = [], line;
    return {
        point: function(x, y, m) {
            line.push([
                x,
                y,
                m
            ]);
        },
        lineStart: function() {
            lines.push(line = []);
        },
        lineEnd: _noopJsDefault.default,
        rejoin: function() {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
        },
        result: function() {
            var result = lines;
            lines = [];
            line = null;
            return result;
        }
    };
};

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bROOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cpqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _mathJs = require("../math.js");
function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
exports.default = function(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n1;
    segments.forEach(function(segment) {
        if ((n = segment.length - 1) <= 0) return;
        var n, p0 = segment[0], p1 = segment[n], x;
        if (_pointEqualJsDefault.default(p0, p1)) {
            if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
            }
            // handle degenerate cases by moving the point
            p1[0] += 2 * _mathJs.epsilon;
        }
        subject.push(x = new Intersection(p0, segment, null, true));
        clip.push(x.o = new Intersection(p0, null, x, false));
        subject.push(x = new Intersection(p1, segment, null, false));
        clip.push(x.o = new Intersection(p1, null, x, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection);
    link(subject);
    link(clip);
    for(i = 0, n1 = clip.length; i < n1; ++i)clip[i].e = startInside = !startInside;
    var start = subject[0], points, point;
    while(true){
        // Find first unvisited intersection.
        var current = start, isSubject = true;
        while(current.v)if ((current = current.n) === start) return;
        points = current.z;
        stream.lineStart();
        do {
            current.v = current.o.v = true;
            if (current.e) {
                if (isSubject) for(i = 0, n1 = points.length; i < n1; ++i)stream.point((point = points[i])[0], point[1]);
                else interpolate(current.x, current.n.x, 1, stream);
                current = current.n;
            } else {
                if (isSubject) {
                    points = current.p.z;
                    for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                } else interpolate(current.x, current.p.x, -1, stream);
                current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
        }while (!current.v)
        stream.lineEnd();
    }
};
function link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}

},{"../pointEqual.js":"5FEbl","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FEbl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("./math.js");
exports.default = function(a, b) {
    return _mathJs.abs(a[0] - b[0]) < _mathJs.epsilon && _mathJs.abs(a[1] - b[1]) < _mathJs.epsilon;
};

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8u1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
function longitude(point) {
    return _mathJs.abs(point[0]) <= _mathJs.pi ? point[0] : _mathJs.sign(point[0]) * ((_mathJs.abs(point[0]) + _mathJs.pi) % _mathJs.tau - _mathJs.pi);
}
exports.default = function(polygon, point) {
    var lambda = longitude(point), phi = point[1], sinPhi = _mathJs.sin(phi), normal = [
        _mathJs.sin(lambda),
        -_mathJs.cos(lambda),
        0
    ], angle = 0, winding = 0;
    var sum = new _d3Array.Adder();
    if (sinPhi === 1) phi = _mathJs.halfPi + _mathJs.epsilon;
    else if (sinPhi === -1) phi = -_mathJs.halfPi - _mathJs.epsilon;
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + _mathJs.quarterPi, sinPhi0 = _mathJs.sin(phi0), cosPhi0 = _mathJs.cos(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + _mathJs.quarterPi, sinPhi1 = _mathJs.sin(phi1), cosPhi1 = _mathJs.cos(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > _mathJs.pi, k = sinPhi0 * sinPhi1;
            sum.add(_mathJs.atan2(k * sign * _mathJs.sin(absDelta), cosPhi0 * cosPhi1 + k * _mathJs.cos(absDelta)));
            angle += antimeridian ? delta + sign * _mathJs.tau : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = _cartesianJs.cartesianCross(_cartesianJs.cartesian(point0), _cartesianJs.cartesian(point1));
                _cartesianJs.cartesianNormalizeInPlace(arc);
                var intersection = _cartesianJs.cartesianCross(normal, arc);
                _cartesianJs.cartesianNormalizeInPlace(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * _mathJs.asin(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
            }
        }
    }
    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -_mathJs.epsilon || angle < _mathJs.epsilon && sum < -_mathJs.epsilon2) ^ winding & 1;
};

},{"d3-array":"1yX2W","./cartesian.js":"4Lw8W","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JGCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _circleJs = require("../circle.js");
var _mathJs = require("../math.js");
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = function(radius) {
    var cr = _mathJs.cos(radius), delta1 = 6 * _mathJs.radians, smallRadius = cr > 0, notHemisphere = _mathJs.abs(cr) > _mathJs.epsilon; // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        _circleJs.circleStream(stream, radius, delta1, direction, from, to);
    }
    function visible(lambda, phi) {
        return _mathJs.cos(lambda) * _mathJs.cos(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
        var point0, c0, v0, v00, clean; // no intersections
        return {
            lineStart: function() {
                v00 = v0 = false;
                clean = 1;
            },
            point: function(lambda, phi) {
                var point1 = [
                    lambda,
                    phi
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code1(lambda, phi) : v ? code1(lambda + (lambda < 0 ? _mathJs.pi : -_mathJs.pi), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || _pointEqualJsDefault.default(point0, point2) || _pointEqualJsDefault.default(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                    clean = 0;
                    if (v) {
                        // outside going in
                        stream.lineStart();
                        point2 = intersect(point1, point0);
                        stream.point(point2[0], point2[1]);
                    } else {
                        // inside going out
                        point2 = intersect(point0, point1);
                        stream.point(point2[0], point2[1], 2);
                        stream.lineEnd();
                    }
                    point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                    var t;
                    // If the codes for two points are different, or are both zero,
                    // and there this segment intersects with the small circle.
                    if (!(c & c0) && (t = intersect(point1, point0, true))) {
                        clean = 0;
                        if (smallRadius) {
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1]);
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                        } else {
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1], 3);
                        }
                    }
                }
                if (v && (!point0 || !_pointEqualJsDefault.default(point0, point1))) stream.point(point1[0], point1[1]);
                point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
                if (v0) stream.lineEnd();
                point0 = null;
            },
            // Rejoin first and last segments if there were intersections and the first
            // and last points were visible.
            clean: function() {
                return clean | (v00 && v0) << 1;
            }
        };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
        var pa = _cartesianJs.cartesian(a), pb = _cartesianJs.cartesian(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = _cartesianJs.cartesianCross(pa, pb), n2n2 = _cartesianJs.cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = _cartesianJs.cartesianCross(n1, n2), A = _cartesianJs.cartesianScale(n1, c1), B = _cartesianJs.cartesianScale(n2, c2);
        _cartesianJs.cartesianAddInPlace(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = _cartesianJs.cartesianDot(A, u), uu = _cartesianJs.cartesianDot(u, u), t2 = w * w - uu * (_cartesianJs.cartesianDot(A, A) - 1);
        if (t2 < 0) return;
        var t = _mathJs.sqrt(t2), q = _cartesianJs.cartesianScale(u, (-w - t) / uu);
        _cartesianJs.cartesianAddInPlace(q, A);
        q = _cartesianJs.spherical(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = _mathJs.abs(delta - _mathJs.pi) < _mathJs.epsilon, meridian = polar || delta < _mathJs.epsilon;
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (_mathJs.abs(q[0] - lambda0) < _mathJs.epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > _mathJs.pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = _cartesianJs.cartesianScale(u, (-w + t) / uu);
            _cartesianJs.cartesianAddInPlace(q1, A);
            return [
                q,
                _cartesianJs.spherical(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code1(lambda, phi) {
        var r = smallRadius ? radius : _mathJs.pi - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return _indexJsDefault.default(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -_mathJs.pi,
        radius - _mathJs.pi
    ]);
};

},{"../cartesian.js":"4Lw8W","../circle.js":"b6BNx","../math.js":"8TMeU","../pointEqual.js":"5FEbl","./index.js":"bCtcN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5auAi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _d3Array = require("d3-array");
var clipMax = 1000000000, clipMin = -clipMax;
function clipRectangle(x0, y0, x1, y1) {
    function visible1(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1)
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return _mathJs.abs(p[0] - x0) < _mathJs.epsilon ? direction > 0 ? 0 : 3 : _mathJs.abs(p[0] - x1) < _mathJs.epsilon ? direction > 0 ? 2 : 1 : _mathJs.abs(p[1] - y0) < _mathJs.epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = _bufferJsDefault.default(), segments, polygon, ring1, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point1,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point1(x, y) {
            if (visible1(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = _d3Array.merge(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) _rejoinJsDefault.default(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring1 = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring1 = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point1;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible1(x, y);
            if (polygon) ring1.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max(clipMin, Math.min(clipMax, x_)),
                    y_ = Math.max(clipMin, Math.min(clipMax, y_))
                ], b = [
                    x = Math.max(clipMin, Math.min(clipMax, x)),
                    y = Math.max(clipMin, Math.min(clipMax, y))
                ];
                if (_lineJsDefault.default(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}
exports.default = clipRectangle;

},{"../math.js":"8TMeU","./buffer.js":"6MwC2","./line.js":"kBMdG","./rejoin.js":"4Cpqb","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBMdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b, x0, y0, x1, y1) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnhfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _contextJs = require("./context.js");
var _contextJsDefault = parcelHelpers.interopDefault(_contextJs);
var _measureJs = require("./measure.js");
var _measureJsDefault = parcelHelpers.interopDefault(_measureJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
exports.default = function(projection, context) {
    var pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            _streamJsDefault.default(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        _streamJsDefault.default(object, projectionStream(_areaJsDefault.default));
        return _areaJsDefault.default.result();
    };
    path.measure = function(object) {
        _streamJsDefault.default(object, projectionStream(_measureJsDefault.default));
        return _measureJsDefault.default.result();
    };
    path.bounds = function(object) {
        _streamJsDefault.default(object, projectionStream(_boundsJsDefault.default));
        return _boundsJsDefault.default.result();
    };
    path.centroid = function(object) {
        _streamJsDefault.default(object, projectionStream(_centroidJsDefault.default));
        return _centroidJsDefault.default.result();
    };
    path.projection = function(_) {
        return arguments.length ? (projectionStream = _ == null ? (projection = null, _identityJsDefault.default) : (projection = _).stream, path) : projection;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new _stringJsDefault.default) : new _contextJsDefault.default(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    return path.projection(projection).context(context);
};

},{"../identity.js":"buAWG","../stream.js":"lpKxD","./area.js":"esEys","./bounds.js":"6inQS","./centroid.js":"hWsH1","./context.js":"bBEPS","./measure.js":"kxo1f","./string.js":"7QFxp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buAWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpKxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
    Feature: function(object, stream) {
        streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)streamGeometry(features[i].geometry, stream);
    }
};
var streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)streamGeometry(geometries[i], stream);
    }
};
function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}
exports.default = function(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
    else streamGeometry(object, stream);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esEys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var areaSum = new _d3Array.Adder(), areaRingSum = new _d3Array.Adder(), x00, y00, x0, y0;
var areaStream = {
    point: _noopJsDefault.default,
    lineStart: _noopJsDefault.default,
    lineEnd: _noopJsDefault.default,
    polygonStart: function() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noopJsDefault.default;
        areaSum.add(_mathJs.abs(areaRingSum));
        areaRingSum = new _d3Array.Adder();
    },
    result: function() {
        var area = areaSum / 2;
        areaSum = new _d3Array.Adder();
        return area;
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
    areaRingSum.add(y0 * x - x0 * y);
    x0 = x, y0 = y;
}
function areaRingEnd() {
    areaPoint(x00, y00);
}
exports.default = areaStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6inQS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: _noopJsDefault.default,
    lineEnd: _noopJsDefault.default,
    polygonStart: _noopJsDefault.default,
    polygonEnd: _noopJsDefault.default,
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWsH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
// TODO Enforce positive area for exterior, negative area for interior?
var X0 = 0, Y0 = 0, Z0 = 0, X1 = 0, Y1 = 0, Z1 = 0, X2 = 0, Y2 = 0, Z2 = 0, x00, y00, x0, y0;
var centroidStream = {
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
        centroidStream.point = centroidPoint;
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    },
    result: function() {
        var centroid = Z2 ? [
            X2 / Z2,
            Y2 / Z2
        ] : Z1 ? [
            X1 / Z1,
            Y1 / Z1
        ] : Z0 ? [
            X0 / Z0,
            Y0 / Z0
        ] : [
            NaN,
            NaN
        ];
        X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
        return centroid;
    }
};
function centroidPoint(x, y) {
    X0 += x;
    Y0 += y;
    ++Z0;
}
function centroidLineStart() {
    centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
    centroidStream.point = centroidPointLine;
    centroidPoint(x0 = x, y0 = y);
}
function centroidPointLine(x, y) {
    var dx = x - x0, dy = y - y0, z = _mathJs.sqrt(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    centroidPoint(x0 = x, y0 = y);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
function centroidRingStart() {
    centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
    centroidPointRing(x00, y00);
}
function centroidPointFirstRing(x, y) {
    centroidStream.point = centroidPointRing;
    centroidPoint(x00 = x0 = x, y00 = y0 = y);
}
function centroidPointRing(x, y) {
    var dx = x - x0, dy = y - y0, z = _mathJs.sqrt(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    z = y0 * x - x0 * y;
    X2 += z * (x0 + x);
    Y2 += z * (y0 + y);
    Z2 += z * 3;
    centroidPoint(x0 = x, y0 = y);
}
exports.default = centroidStream;

},{"../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBEPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
function PathContext(context) {
    this._context = context;
}
exports.default = PathContext;
PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, _mathJs.tau);
                break;
        }
    },
    result: _noopJsDefault.default
};

},{"../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxo1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var lengthSum = new _d3Array.Adder(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: _noopJsDefault.default,
    lineStart: function() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = _noopJsDefault.default;
    },
    polygonStart: function() {
        lengthRing = true;
    },
    polygonEnd: function() {
        lengthRing = null;
    },
    result: function() {
        var length = +lengthSum;
        lengthSum = new _d3Array.Adder();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add(_mathJs.sqrt(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
exports.default = lengthStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QFxp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function PathString() {
    this._string = [];
}
exports.default = PathString;
PathString.prototype = {
    _radius: 4.5,
    _circle: circle(4.5),
    pointRadius: function(_) {
        if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
        return this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._string.push("Z");
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._string.push("M", x, ",", y);
                this._point = 1;
                break;
            case 1:
                this._string.push("L", x, ",", y);
                break;
            default:
                if (this._circle == null) this._circle = circle(this._radius);
                this._string.push("M", x, ",", y, this._circle);
                break;
        }
    },
    result: function() {
        if (this._string.length) {
            var result = this._string.join("");
            this._string = [];
            return result;
        } else return null;
    }
};
function circle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvQZA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _conicEqualAreaJs = require("./conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
exports.default = function() {
    return _conicEqualAreaJsDefault.default().parallels([
        29.5,
        45.5
    ]).scale(1070).translate([
        480,
        250
    ]).rotate([
        96,
        0
    ]).center([
        -0.6,
        38.7
    ]);
};

},{"./conicEqualArea.js":"cfI84","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfI84":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicEqualAreaRaw", ()=>conicEqualAreaRaw
);
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _cylindricalEqualAreaJs = require("./cylindricalEqualArea.js");
function conicEqualAreaRaw(y0, y1) {
    var sy0 = _mathJs.sin(y0), n = (sy0 + _mathJs.sin(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if (_mathJs.abs(n) < _mathJs.epsilon) return _cylindricalEqualAreaJs.cylindricalEqualAreaRaw(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = _mathJs.sqrt(c) / n;
    function project(x, y) {
        var r = _mathJs.sqrt(c - 2 * n * _mathJs.sin(y)) / n;
        return [
            r * _mathJs.sin(x *= n),
            r0 - r * _mathJs.cos(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = _mathJs.atan2(x, _mathJs.abs(r0y)) * _mathJs.sign(r0y);
        if (r0y * n < 0) l -= _mathJs.pi * _mathJs.sign(x) * _mathJs.sign(r0y);
        return [
            l / n,
            _mathJs.asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}
exports.default = function() {
    return _conicJs.conicProjection(conicEqualAreaRaw).scale(155.424).center([
        0,
        33.6442
    ]);
};

},{"../math.js":"8TMeU","./conic.js":"alzWk","./cylindricalEqualArea.js":"dlobY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alzWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicProjection", ()=>conicProjection
);
var _mathJs = require("../math.js");
var _indexJs = require("./index.js");
function conicProjection(projectAt) {
    var phi0 = 0, phi1 = _mathJs.pi / 3, m = _indexJs.projectionMutator(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * _mathJs.radians, phi1 = _[1] * _mathJs.radians) : [
            phi0 * _mathJs.degrees,
            phi1 * _mathJs.degrees
        ];
    };
    return p;
}

},{"../math.js":"8TMeU","./index.js":"gSlbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSlbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectionMutator", ()=>projectionMutator
);
var _antimeridianJs = require("../clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs = require("../clip/circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _rectangleJs = require("../clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _composeJs = require("../compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _transformJs = require("../transform.js");
var _fitJs = require("./fit.js");
var _resampleJs = require("./resample.js");
var _resampleJsDefault = parcelHelpers.interopDefault(_resampleJs);
var transformRadians = _transformJs.transformer({
    point: function(x, y) {
        this.stream.point(x * _mathJs.radians, y * _mathJs.radians);
    }
});
function transformRotate(rotate) {
    return _transformJs.transformer({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = _mathJs.cos(alpha), sinAlpha = _mathJs.sin(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function projection(project) {
    return projectionMutator(function() {
        return project;
    })();
}
exports.default = projection;
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = _antimeridianJsDefault.default, x0 = null, y0, x1, y1, postclip = _identityJsDefault.default, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection1(point) {
        return projectRotateTransform(point[0] * _mathJs.radians, point[1] * _mathJs.radians);
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * _mathJs.degrees,
            point[1] * _mathJs.degrees
        ];
    }
    projection1.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection1.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection1.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection1.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? _circleJsDefault.default(theta = _ * _mathJs.radians) : (theta = null, _antimeridianJsDefault.default), reset()) : theta * _mathJs.degrees;
    };
    projection1.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : _rectangleJsDefault.default(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection1.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection1.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection1.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * _mathJs.radians, phi = _[1] % 360 * _mathJs.radians, recenter()) : [
            lambda * _mathJs.degrees,
            phi * _mathJs.degrees
        ];
    };
    projection1.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * _mathJs.radians, deltaPhi = _[1] % 360 * _mathJs.radians, deltaGamma = _.length > 2 ? _[2] % 360 * _mathJs.radians : 0, recenter()) : [
            deltaLambda * _mathJs.degrees,
            deltaPhi * _mathJs.degrees,
            deltaGamma * _mathJs.degrees
        ];
    };
    projection1.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * _mathJs.radians, recenter()) : alpha * _mathJs.degrees;
    };
    projection1.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection1.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection1.precision = function(_) {
        return arguments.length ? (projectResample = _resampleJsDefault.default(projectTransform, delta2 = _ * _), reset()) : _mathJs.sqrt(delta2);
    };
    projection1.fitExtent = function(extent, object) {
        return _fitJs.fitExtent(projection1, extent, object);
    };
    projection1.fitSize = function(size, object) {
        return _fitJs.fitSize(projection1, size, object);
    };
    projection1.fitWidth = function(width, object) {
        return _fitJs.fitWidth(projection1, width, object);
    };
    projection1.fitHeight = function(height, object) {
        return _fitJs.fitHeight(projection1, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = _rotationJs.rotateRadians(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = _composeJsDefault.default(project, transform);
        projectRotateTransform = _composeJsDefault.default(rotate, projectTransform);
        projectResample = _resampleJsDefault.default(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection1;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection1.invert = project.invert && invert;
        return recenter();
    };
}

},{"../clip/antimeridian.js":"5Pn7h","../clip/circle.js":"6JGCr","../clip/rectangle.js":"5auAi","../compose.js":"lJD5n","../identity.js":"buAWG","../math.js":"8TMeU","../rotation.js":"g2pLL","../transform.js":"AaiPA","./fit.js":"fNXsS","./resample.js":"l8WqU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AaiPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformer", ()=>transformer
);
exports.default = function(methods) {
    return {
        stream: transformer(methods)
    };
};
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {}
TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNXsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent
);
parcelHelpers.export(exports, "fitSize", ()=>fitSize
);
parcelHelpers.export(exports, "fitWidth", ()=>fitWidth
);
parcelHelpers.export(exports, "fitHeight", ()=>fitHeight
);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _boundsJs = require("../path/bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    _streamJsDefault.default(object, projection.stream(_boundsJsDefault.default));
    fitBounds(_boundsJsDefault.default.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}

},{"../stream.js":"lpKxD","../path/bounds.js":"6inQS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8WqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _mathJs = require("../math.js");
var _transformJs = require("../transform.js");
var maxDepth = 16, cosMinDistance = _mathJs.cos(30 * _mathJs.radians); // cos(minimum angular distance)
exports.default = function(project, delta2) {
    return +delta2 ? resample(project, delta2) : resampleNone(project);
};
function resampleNone(project) {
    return _transformJs.transformer({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = _mathJs.sqrt(a * a + b * b + c * c), phi2 = _mathJs.asin(c /= m), lambda2 = _mathJs.abs(_mathJs.abs(c) - 1) < _mathJs.epsilon || _mathJs.abs(lambda0 - lambda1) < _mathJs.epsilon ? (lambda0 + lambda1) / 2 : _mathJs.atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || _mathJs.abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = _cartesianJs.cartesian([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}

},{"../cartesian.js":"4Lw8W","../math.js":"8TMeU","../transform.js":"AaiPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dlobY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cylindricalEqualAreaRaw", ()=>cylindricalEqualAreaRaw
);
var _mathJs = require("../math.js");
function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = _mathJs.cos(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            _mathJs.sin(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            _mathJs.asin(y * cosPhi0)
        ];
    };
    return forward;
}

},{"../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciUQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bbox", ()=>_bboxJsDefault.default
);
parcelHelpers.export(exports, "feature", ()=>_featureJsDefault.default
);
parcelHelpers.export(exports, "mesh", ()=>_meshJsDefault.default
);
parcelHelpers.export(exports, "meshArcs", ()=>_meshJs.meshArcs
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "mergeArcs", ()=>_mergeJs.mergeArcs
);
parcelHelpers.export(exports, "neighbors", ()=>_neighborsJsDefault.default
);
parcelHelpers.export(exports, "quantize", ()=>_quantizeJsDefault.default
);
parcelHelpers.export(exports, "transform", ()=>_transformJsDefault.default
);
parcelHelpers.export(exports, "untransform", ()=>_untransformJsDefault.default
);
var _bboxJs = require("./bbox.js");
var _bboxJsDefault = parcelHelpers.interopDefault(_bboxJs);
var _featureJs = require("./feature.js");
var _featureJsDefault = parcelHelpers.interopDefault(_featureJs);
var _meshJs = require("./mesh.js");
var _meshJsDefault = parcelHelpers.interopDefault(_meshJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _neighborsJs = require("./neighbors.js");
var _neighborsJsDefault = parcelHelpers.interopDefault(_neighborsJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
var _untransformJs = require("./untransform.js");
var _untransformJsDefault = parcelHelpers.interopDefault(_untransformJs);

},{"./bbox.js":"uhxVo","./feature.js":"hVcmB","./mesh.js":"7csN8","./merge.js":"gZehY","./neighbors.js":"ggIrQ","./quantize.js":"dZnMF","./transform.js":"hDrZC","./untransform.js":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"uhxVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
exports.default = function(topology) {
    var t = _transformJsDefault.default(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
    function bboxPoint(p) {
        p = t(p);
        if (p[0] < x0) x0 = p[0];
        if (p[0] > x1) x1 = p[0];
        if (p[1] < y0) y0 = p[1];
        if (p[1] > y1) y1 = p[1];
    }
    function bboxGeometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(bboxGeometry);
                break;
            case "Point":
                bboxPoint(o.coordinates);
                break;
            case "MultiPoint":
                o.coordinates.forEach(bboxPoint);
                break;
        }
    }
    topology.arcs.forEach(function(arc) {
        var i = -1, n = arc.length, p;
        while(++i < n){
            p = t(arc[i], i);
            if (p[0] < x0) x0 = p[0];
            if (p[0] > x1) x1 = p[0];
            if (p[1] < y0) y0 = p[1];
            if (p[1] > y1) y1 = p[1];
        }
    });
    for(key in topology.objects)bboxGeometry(topology.objects[key]);
    return [
        x0,
        y0,
        x1,
        y1
    ];
};

},{"./transform.js":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDrZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
exports.default = function(transform) {
    if (transform == null) return _identityJsDefault.default;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n);
        output[0] = (x0 += input[0]) * kx + dx;
        output[1] = (y0 += input[1]) * ky + dy;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
};

},{"./identity.js":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mfyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVcmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "object", ()=>object
);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
exports.default = function(topology, o1) {
    if (typeof o1 === "string") o1 = topology.objects[o1];
    return o1.type === "GeometryCollection" ? {
        type: "FeatureCollection",
        features: o1.geometries.map(function(o) {
            return feature(topology, o);
        })
    } : feature(topology, o1);
};
function feature(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object(topology, o);
    return id == null && bbox == null ? {
        type: "Feature",
        properties: properties,
        geometry: geometry
    } : bbox == null ? {
        type: "Feature",
        id: id,
        properties: properties,
        geometry: geometry
    } : {
        type: "Feature",
        id: id,
        bbox: bbox,
        properties: properties,
        geometry: geometry
    };
}
function object(topology, o2) {
    var transformPoint = _transformJsDefault.default(topology.transform), arcs1 = topology.arcs;
    function arc(i, points) {
        if (points.length) points.pop();
        for(var a = arcs1[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k)points.push(transformPoint(a[k], k));
        if (i < 0) _reverseJsDefault.default(points, n);
    }
    function point(p) {
        return transformPoint(p);
    }
    function line(arcs) {
        var points = [];
        for(var i = 0, n = arcs.length; i < n; ++i)arc(arcs[i], points);
        if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
        return points;
    }
    function ring(arcs) {
        var points = line(arcs);
        while(points.length < 4)points.push(points[0]); // This may happen if an arc has only two points.
        return points;
    }
    function polygon(arcs) {
        return arcs.map(ring);
    }
    function geometry(o) {
        var type = o.type, coordinates;
        switch(type){
            case "GeometryCollection":
                return {
                    type: type,
                    geometries: o.geometries.map(geometry)
                };
            case "Point":
                coordinates = point(o.coordinates);
                break;
            case "MultiPoint":
                coordinates = o.coordinates.map(point);
                break;
            case "LineString":
                coordinates = line(o.arcs);
                break;
            case "MultiLineString":
                coordinates = o.arcs.map(line);
                break;
            case "Polygon":
                coordinates = polygon(o.arcs);
                break;
            case "MultiPolygon":
                coordinates = o.arcs.map(polygon);
                break;
            default:
                return null;
        }
        return {
            type: type,
            coordinates: coordinates
        };
    }
    return geometry(o2);
}

},{"./reverse.js":"eTq9J","./transform.js":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTq9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(array, n) {
    var t, j = array.length, i = j - n;
    while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7csN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "meshArcs", ()=>meshArcs
);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
exports.default = function(topology) {
    return _featureJs.object(topology, meshArcs.apply(this, arguments));
};
function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    else for(i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i)arcs[i] = i;
    return {
        type: "MultiLineString",
        arcs: _stitchJsDefault.default(topology, arcs)
    };
}
function extractArcs(topology, object, filter) {
    var arcs1 = [], geomsByArc = [], geom;
    function extract0(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({
            i: i,
            g: geom
        });
    }
    function extract1(arcs) {
        arcs.forEach(extract0);
    }
    function extract2(arcs) {
        arcs.forEach(extract1);
    }
    function extract3(arcs) {
        arcs.forEach(extract2);
    }
    function geometry(o) {
        switch(geom = o, o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "LineString":
                extract1(o.arcs);
                break;
            case "MultiLineString":
            case "Polygon":
                extract2(o.arcs);
                break;
            case "MultiPolygon":
                extract3(o.arcs);
                break;
        }
    }
    geometry(object);
    geomsByArc.forEach(filter == null ? function(geoms) {
        arcs1.push(geoms[0].i);
    } : function(geoms) {
        if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs1.push(geoms[0].i);
    });
    return arcs1;
}

},{"./feature.js":"hVcmB","./stitch.js":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5MKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(topology, arcs) {
    var stitchedArcs = {}, fragmentByStart1 = {}, fragmentByEnd1 = {}, fragments = [], emptyIndex = -1;
    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function(i, j) {
        var arc = topology.arcs[i < 0 ? ~i : i], t;
        if (arc.length < 3 && !arc[1][0] && !arc[1][1]) t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    });
    arcs.forEach(function(i) {
        var e = ends(i), start = e[0], end = e[1], f, g;
        if (f = fragmentByEnd1[start]) {
            delete fragmentByEnd1[f.end];
            f.push(i);
            f.end = end;
            if (g = fragmentByStart1[end]) {
                delete fragmentByStart1[g.start];
                var fg = g === f ? f : f.concat(g);
                fragmentByStart1[fg.start = f.start] = fragmentByEnd1[fg.end = g.end] = fg;
            } else fragmentByStart1[f.start] = fragmentByEnd1[f.end] = f;
        } else if (f = fragmentByStart1[end]) {
            delete fragmentByStart1[f.start];
            f.unshift(i);
            f.start = start;
            if (g = fragmentByEnd1[start]) {
                delete fragmentByEnd1[g.end];
                var gf = g === f ? f : g.concat(f);
                fragmentByStart1[gf.start = g.start] = fragmentByEnd1[gf.end = f.end] = gf;
            } else fragmentByStart1[f.start] = fragmentByEnd1[f.end] = f;
        } else {
            f = [
                i
            ];
            fragmentByStart1[f.start = start] = fragmentByEnd1[f.end = end] = f;
        }
    });
    function ends(i) {
        var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
        if (topology.transform) p1 = [
            0,
            0
        ], arc.forEach(function(dp) {
            p1[0] += dp[0], p1[1] += dp[1];
        });
        else p1 = arc[arc.length - 1];
        return i < 0 ? [
            p1,
            p0
        ] : [
            p0,
            p1
        ];
    }
    function flush(fragmentByEnd, fragmentByStart) {
        for(var k in fragmentByEnd){
            var f = fragmentByEnd[k];
            delete fragmentByStart[f.start];
            delete f.start;
            delete f.end;
            f.forEach(function(i) {
                stitchedArcs[i < 0 ? ~i : i] = 1;
            });
            fragments.push(f);
        }
    }
    flush(fragmentByEnd1, fragmentByStart1);
    flush(fragmentByStart1, fragmentByEnd1);
    arcs.forEach(function(i) {
        if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([
            i
        ]);
    });
    return fragments;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZehY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeArcs", ()=>mergeArcs
);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
exports.default = function(topology) {
    return _featureJs.object(topology, mergeArcs.apply(this, arguments));
};
function mergeArcs(topology, objects) {
    var polygonsByArc = {}, polygons1 = [], groups = [];
    objects.forEach(geometry);
    function geometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "Polygon":
                extract(o.arcs);
                break;
            case "MultiPolygon":
                o.arcs.forEach(extract);
                break;
        }
    }
    function extract(polygon) {
        polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
            });
        });
        polygons1.push(polygon);
    }
    function area(ring) {
        return planarRingArea(_featureJs.object(topology, {
            type: "Polygon",
            arcs: [
                ring
            ]
        }).coordinates[0]);
    }
    polygons1.forEach(function(polygon1) {
        if (!polygon1._) {
            var group = [], neighbors = [
                polygon1
            ];
            polygon1._ = 1;
            groups.push(group);
            while(polygon1 = neighbors.pop()){
                group.push(polygon1);
                polygon1.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                            if (!polygon._) {
                                polygon._ = 1;
                                neighbors.push(polygon);
                            }
                        });
                    });
                });
            }
        }
    });
    polygons1.forEach(function(polygon) {
        delete polygon._;
    });
    return {
        type: "MultiPolygon",
        arcs: groups.map(function(polygons) {
            var arcs = [], n;
            // Extract the exterior (unique) arcs.
            polygons.forEach(function(polygon) {
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) arcs.push(arc);
                    });
                });
            });
            // Stitch the arcs into one or more rings.
            arcs = _stitchJsDefault.default(topology, arcs);
            // If more than one ring is returned,
            // at most one of these rings can be the exterior;
            // choose the one with the greatest absolute area.
            if ((n = arcs.length) > 1) {
                for(var i = 1, k = area(arcs[0]), ki, t; i < n; ++i)if ((ki = area(arcs[i])) > k) t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
            }
            return arcs;
        }).filter(function(arcs) {
            return arcs.length > 0;
        })
    };
}

},{"./feature.js":"hVcmB","./stitch.js":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggIrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
exports.default = function(objects) {
    var indexesByArc = {}, neighbors = objects.map(function() {
        return [];
    });
    function line(arcs, i) {
        arcs.forEach(function(a) {
            if (a < 0) a = ~a;
            var o = indexesByArc[a];
            if (o) o.push(i);
            else indexesByArc[a] = [
                i
            ];
        });
    }
    function polygon(arcs, i) {
        arcs.forEach(function(arc) {
            line(arc, i);
        });
    }
    function geometry(o1, i) {
        if (o1.type === "GeometryCollection") o1.geometries.forEach(function(o) {
            geometry(o, i);
        });
        else if (o1.type in geometryType) geometryType[o1.type](o1.arcs, i);
    }
    var geometryType = {
        LineString: line,
        MultiLineString: polygon,
        Polygon: polygon,
        MultiPolygon: function(arcs, i) {
            arcs.forEach(function(arc) {
                polygon(arc, i);
            });
        }
    };
    objects.forEach(geometry);
    for(var i1 in indexesByArc){
        for(var indexes = indexesByArc[i1], m = indexes.length, j = 0; j < m; ++j)for(var k = j + 1; k < m; ++k){
            var ij = indexes[j], ik = indexes[k], n;
            if ((n = neighbors[ij])[i1 = _bisectJsDefault.default(n, ik)] !== ik) n.splice(i1, 0, ik);
            if ((n = neighbors[ik])[i1 = _bisectJsDefault.default(n, ij)] !== ij) n.splice(i1, 0, ij);
        }
    }
    return neighbors;
};

},{"./bisect.js":"dgF2n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgF2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, x) {
    var lo = 0, hi = a.length;
    while(lo < hi){
        var mid = lo + hi >>> 1;
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZnMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bboxJs = require("./bbox.js");
var _bboxJsDefault = parcelHelpers.interopDefault(_bboxJs);
var _untransformJs = require("./untransform.js");
var _untransformJsDefault = parcelHelpers.interopDefault(_untransformJs);
exports.default = function(topology, transform) {
    if (topology.transform) throw new Error("already quantized");
    if (!transform || !transform.scale) {
        if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
        box = topology.bbox || _bboxJsDefault.default(topology);
        var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
        transform = {
            scale: [
                x1 - x0 ? (x1 - x0) / (n - 1) : 1,
                y1 - y0 ? (y1 - y0) / (n - 1) : 1
            ],
            translate: [
                x0,
                y0
            ]
        };
    } else box = topology.bbox;
    var t = _untransformJsDefault.default(transform), box, key, inputs = topology.objects, outputs = {};
    function quantizePoint(point) {
        return t(point);
    }
    function quantizeGeometry(input) {
        var output;
        switch(input.type){
            case "GeometryCollection":
                output = {
                    type: "GeometryCollection",
                    geometries: input.geometries.map(quantizeGeometry)
                };
                break;
            case "Point":
                output = {
                    type: "Point",
                    coordinates: quantizePoint(input.coordinates)
                };
                break;
            case "MultiPoint":
                output = {
                    type: "MultiPoint",
                    coordinates: input.coordinates.map(quantizePoint)
                };
                break;
            default:
                return input;
        }
        if (input.id != null) output.id = input.id;
        if (input.bbox != null) output.bbox = input.bbox;
        if (input.properties != null) output.properties = input.properties;
        return output;
    }
    function quantizeArc(input) {
        var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
        output[0] = t(input[0], 0);
        while(++i < n)if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
        if (j === 1) output[j++] = [
            0,
            0
        ]; // an arc must have at least two points
        output.length = j;
        return output;
    }
    for(key in inputs)outputs[key] = quantizeGeometry(inputs[key]);
    return {
        type: "Topology",
        bbox: box,
        transform: transform,
        objects: outputs,
        arcs: topology.arcs.map(quantizeArc)
    };
};

},{"./bbox.js":"uhxVo","./untransform.js":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioj0t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
exports.default = function(transform) {
    if (transform == null) return _identityJsDefault.default;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
        output[0] = x1 - x0, x0 = x1;
        output[1] = y1 - y0, y0 = y1;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
};

},{"./identity.js":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MPtM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mover", ()=>mover
);
parcelHelpers.export(exports, "mout", ()=>mout
);
parcelHelpers.export(exports, "mclickBase", ()=>mclickBase
);
parcelHelpers.export(exports, "mclick", ()=>mclick
);
parcelHelpers.export(exports, "dragstarted", ()=>dragstarted
);
parcelHelpers.export(exports, "dragged", ()=>dragged
);
parcelHelpers.export(exports, "dragended", ()=>dragended
);
var _shaper = require("./shaper");
var _constants = require("./constants");
function mover(d) {
    d3.selectAll("." + this.getAttribute('class'))// d3.select(this)
    .transition().duration(10).style("fill-opacity", 0.9);
}
function mout(d) {
    d3.selectAll("." + this.getAttribute('class'))// d3.select(this)
    .transition().duration(10).style("fill-opacity", 1);
}
function mclickBase(d) {
    let selectElement = document.querySelector('#cell-option');
    switch(selectElement.value){
        case _constants.cellAction.Remove:
            d3.select(this).style('fill', '#fff').style('stroke', '#e0e0e0').style('stroke-width', _constants.strokeWidth).lower();
            break;
        case _constants.cellAction.Add:
            let colorElement = document.querySelector('#color-option');
            d3.select(this).style('stroke-width', _constants.strokeWidth).style('fill', colorElement.value).style('stroke', '#000').on("mouseover", mover).on("mouseout", mout).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)).raise();
            break;
    }
}
function mclick(d) {
    let selectElement = document.querySelector('#cell-option');
    switch(selectElement.value){
        case _constants.cellAction.Remove:
            d3.select(this).remove();
            break;
        case _constants.cellAction.Add:
            let colorElement = document.querySelector('#color-option');
            d3.select(this).style('stroke-width', _constants.strokeWidth).style('fill', colorElement.value).style('stroke', '#000').on("mouseover", mover).on("mouseout", mout).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)).raise();
            break;
    }
}
function dragstarted(event, d) {
    d.fixed = false;
    d3.select(this).raise().style('stroke-width', 1).style('stroke', '#000');
}
function dragged(event, d) {
    let cellShape = document.querySelector('#cell-shape-option').value;
    let hexRadius = document.querySelector('input#radius').value;
    var x = event.x;
    var y = event.y;
    var grids = _shaper.getNearestSlot(x, y, hexRadius, cellShape);
    d3.select(this).attr("x", d.x = grids[0]).attr("y", d.y = grids[1]).attr('transform', _shaper.getTransformation(cellShape));
}
function dragended(event, d) {
    d.fixed = true;
    d3.select(this).style('stroke-width', _constants.strokeWidth).style('stroke', '#000');
}

},{"./shaper":"jvMST","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./constants":"68kaV"}]},["d5kvp","igcvL"], "igcvL", "parcelRequire3add")

//# sourceMappingURL=index.5baa4167.js.map
