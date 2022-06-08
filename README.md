# World Population Cartogram 🗺

Demo: [https://www.pyblog.xyz/population-cartogram](https://www.pyblog.xyz/population-cartogram/)

Wiki: A cartogram is a map in which the geometry of regions is distorted in order to convey the information of an alternate variable such as population. The region area will be inflated or deflated according to its numeric value

World Population Cartogram from 1960 to 2060:

<img src="https://github.com/addu390/population-cartogram/blob/master/images/cartogram.gif"/>

## Project set-up

- Install dependencies: `npm install` and `pip install -r requirements.txt`
- Start server: `npx parcel index.html`
- Deploy (gh-pages): `npm run deploy`

## Dataset

- [Raster grid](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-national-identifier-grid-rev11) from SEDAC 
- [Topojson](https://raw.githubusercontent.com/addu390/population-cartogram/master/data/test2/topo.json) - Max Roser's 2018 world population carogram by [@mattdzugan](https://github.com/mattdzugan/World-Population-Cartogram)
- [Population Dataset](https://github.com/addu390/population-cartogram/blob/master/data/world-population-unpd-3.csv) from OWID (Our World in Data)

## Download

- Supported types: SVG and Geojson; recommended free tools to modify: [mapshaper](https://mapshaper.org/) for geojson and [rapidtables](https://www.rapidtables.com/web/tools/svg-viewer-editor.html) for SVG

## Citations

```
Max Roser (2018) – "The map we need if we want to think about how global living conditions are changing". Published online at OurWorldInData.org. Retrieved from: ‘https://ourworldindata.org/world-population-cartogram’ [Online Resource]

Max's relevant citations:
This data I took from the UN Population Division and you can access that data and visualize it for other countries on our map here. https://ourworldindata.org/grapher/UN-population-projection-medium-variant?year=2018
The 2018 data is a future projection that the UN Population Division created last year.
Other data – the US in 1776, the population of various metropolitan areas, and the population of some small countries – are mostly from Wikipedia.

James A. Dougenik, Nicholas R. Chrisman & Duane R. Niemeyer (1985) AN ALGORITHM TO CONSTRUCT CONTINUOUS AREA CARTOGRAMS, The Professional Geographer, 37:1, 75-81, DOI: 10.1111/j.0033-0124.1985.00075.x

M. T. Gastner, V. Seguy, and P. More, “Fast flow-based algorithm for creating density-equalizing map projections,” Proceedings of the National Academy of Sciences, vol. 115, no. 10, pp. E2156–E2164, Feb. 2018, doi: 10.1073/pnas.1712674115.
```