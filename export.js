import { outputFileType } from "./core/constants";

export function download(fileType, year) {
  console.log(fileType, year);
  var filename = "cartogram" + year;
  switch (fileType) {
    case outputFileType.GeoJSON:
      console.log("Unsupported format")
    case outputFileType.SVG:
      d3.select("#select-download").each(function () {
        d3.select(this)
          .attr(
            "href",
            "data:application/octet-stream;base64," +
              btoa(d3.select("#container").html())
          )
          .attr("download", filename + ".svg");
      });
  }
}
