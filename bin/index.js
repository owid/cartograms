#!/usr/bin/env node

const yargs = require("yargs");

const yearOption = yargs
 .usage("Usage: -y <year>")
 .option("y", { alias: "year", describe: "Population cartogram for the year", type: "number", demandOption: true })
 .argv;

const radiusOption = yargs
 .usage("Usage: -r <radius>")
 .option("r", { alias: "radius", describe: "Radius/width of each cell", type: "number", demandOption: true })
 .argv;

const scaleOption = yargs
 .usage("Usage: -s <fixed | fluid>")
 .option("s", { alias: "scale", describe: "Scaling the cartogram by Fixed or Fluid mode", type: "string", demandOption: true })
 .argv;

const cartogram = `Hello, ${yearOption.year} ${radiusOption.radius} ${scaleOption.scale}!`;

console.log(cartogram);