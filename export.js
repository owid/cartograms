import { outputFileType } from "./core/constants";

export function download(fileType, year) {
    var filename = "cartogram" + year;
    switch (fileType) {
        case outputFileType.GeoJSON:
            downloadObjectAsJson(exportJson, filename)
        case outputFileType.SVG:
            d3.select("#download").each(function () {
                d3.select(this)
                    .attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#container").html()))
                    .attr("download", filename + ".svg")
            })
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
  