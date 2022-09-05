import { download } from "./export";
import { render } from "./core/plot";
import { defaultPopulationFactor } from "./core/constants"

document.querySelector("#loader").classList.add("hide");

let radiusInput = document.querySelector("input#radius");
let radiusButton = document.querySelector("input#select-radius");

let cellScaleInput = document.querySelector("#cell-scale");
let cellScaleButton = document.querySelector("input#select-cell-scale");

let downloadButton = document.querySelector("#select-download");

let cellShapeInput = document.querySelector("#cell-shape");
let cellShapeButton = document.querySelector("#select-cell-shape");

let yearInput = document.querySelector("input#year");
let yearButton = document.querySelector("input#select-year");

radiusButton.addEventListener("click", () => {
  radiusInput = document.querySelector("input#radius");
  document.querySelector("#loader").classList.remove("hide");
  load();
});

yearButton.addEventListener("click", () => {
  yearInput = document.querySelector("input#year");
  document.querySelector("#loader").classList.remove("hide");
  load();
});

downloadButton.addEventListener("click", () => {
  let fileType = document.querySelector("#download").value;
  download(fileType, yearInput.value);
});

cellShapeButton.addEventListener("click", () => {
  cellShapeInput = document.querySelector("#cell-shape");
  document.querySelector("#loader").classList.remove("hide");
  load();
});

cellScaleButton.addEventListener("click", () => {
  cellScaleInput = document.querySelector("#cell-scale");
  document.querySelector("#loader").classList.remove("hide");
  load();
});

function load() {
  let cellRadius = radiusInput.value;
  let cellShape = cellShapeInput.value;
  let cellScale = cellScaleInput.value;
  let year = yearInput.value;

  const topoData = d3.json(
    "https://raw.githubusercontent.com/owid/cartograms/main/data/base/2018/v2/topo.json"
  );
  const popData = d3.csv(
    "https://raw.githubusercontent.com/owid/cartograms/main/data/population/unpd-flat.csv"
  );

  Promise.all([topoData, popData]).then((res) => {
    let [topoData, popData] = res;
    let cellDetails = {
      radius: cellRadius,
      shape: cellShape,
      scale: cellScale,
    };
    render(topoData, popData, cellDetails, year, defaultPopulationFactor);
    document.querySelector("#loader").classList.add("hide");
  });
}

load();
