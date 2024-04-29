import { series } from './data.js';
var seriesTbody = document.getElementById("series");
var seriesAverage = document.getElementById("promedio");
renderSeriesInTable(series);
calcularPromedioTemporadas(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetails(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function showSeriesDetails(serie) {
    var cardImage = document.getElementById("cardImage");
    var cardTitle = document.getElementById("cardTitle");
    var cardSubtitle = document.getElementById("cardSubtitle");
    var cardText = document.getElementById("cardText");
    var cardLink = document.getElementById("cardLink");
    cardImage.src = serie.imagenURL;
    cardImage.alt = "Image of ".concat(serie.name);
    cardTitle.textContent = serie.name;
    cardSubtitle.textContent = "Channel: ".concat(serie.channel);
    cardText.textContent = serie.description;
    cardLink.href = serie.link;
    cardLink.textContent = 'More Info';
}
function calcularPromedioTemporadas(listadoSeries) {
    var acumuladoTemporadas = 0;
    listadoSeries.forEach(function (serie) {
        acumuladoTemporadas += serie.seasons;
    });
    var promedioTemporadas = Math.round(acumuladoTemporadas / listadoSeries.length);
    seriesAverage.textContent = "Average Seasons: ".concat(promedioTemporadas);
}
