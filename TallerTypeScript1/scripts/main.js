import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var seriesAverage = document.getElementById("average");
renderSeriesInTable(series);
calcularPromedioTemporadas(series);
function renderSeriesInTable(series) {
    console.log('cargando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioTemporadas(listadoSeries) {
    var acumuladoTemporadas = 0;
    listadoSeries.forEach(function (serie) {
        acumuladoTemporadas += serie.seasons;
    });
    var promedioTemporadas = Math.round(acumuladoTemporadas / listadoSeries.length);
    seriesAverage.textContent = "Average Seasons: ".concat(promedioTemporadas);
}
