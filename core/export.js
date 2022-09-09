import { outputFileType } from "./constants";
import { exportCsv } from "./plot";

export function downloadByMimeType(content, fileName, mimeType) {
    var a = document.createElement('a');
    mimeType = mimeType || 'application/octet-stream';
  
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(new Blob([content], {
        type: mimeType
      }), fileName);
    } else if (URL && 'download' in a) {
      a.href = URL.createObjectURL(new Blob([content], {
        type: mimeType
      }));
      a.setAttribute('download', fileName);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      location.href = 'data:application/octet-stream,' + encodeURIComponent(content);
    }
  }

export function download(fileType, year) {
    var filename = "cartogram" + year;
    switch (fileType) {
      case outputFileType.CSV:
        var csvContent = '';
        exportCsv.forEach(function(row, index) {
            var dataString = row.join(',');
            csvContent += index < exportCsv.length ? dataString + '\n' : dataString;
        });
        downloadByMimeType(csvContent, "cartogram.csv", "text/csv;encoding:utf-8")
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