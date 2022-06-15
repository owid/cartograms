import { download } from './export';
import { render } from './core/plot'

document.querySelector('#loader').classList.add("hide");

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
  load()
});

yearButton.addEventListener('click', () => {
  yearInput = document.querySelector('input#year');
  document.querySelector('#loader').classList.remove("hide");
  load()
});

downloadButton.addEventListener('click', () => {
  let fileType = document.querySelector('#download-option').value;
  download(fileType, yearInput.value);
});

cellShapeButton.addEventListener('click', () => {
  cellShapeInput = document.querySelector('#cell-shape-option');
  document.querySelector('#loader').classList.remove("hide");
  load()
});

function load() {
  let hexRadius = radiusInput.value
  let cellShape = cellShapeInput.value
  let year = yearInput.value;
  
  const topoData = d3.json('https://raw.githubusercontent.com/owid/cartograms/main/data/base/2018/v2/topo.json');
  const popData = d3.csv('https://raw.githubusercontent.com/owid/cartograms/main/data/population/unpd-flat.csv');
  
  Promise.all([topoData, popData]).then(res => {
    let [topoData, popData] = res;
    render(topoData, popData, hexRadius, cellShape, year);
    document.querySelector('#loader').classList.add("hide");
  });
}

load()