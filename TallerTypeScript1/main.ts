
import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesAverage: HTMLElement = document.getElementById("average")!;
renderSeriesInTable(series);
calcularPromedioTemporadas(series);
function renderSeriesInTable(series: Serie[]): void {
  console.log('cargando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
  seriesTbody.appendChild(trElement);
  });
}

function calcularPromedioTemporadas(listadoSeries: Serie[]): void {
  let acumuladoTemporadas = 0;
  listadoSeries.forEach(serie => {
    acumuladoTemporadas += serie.seasons;
  });
  const promedioTemporadas = Math.round(acumuladoTemporadas / listadoSeries.length);
  seriesAverage.textContent = `Average Seasons: ${promedioTemporadas}`;
}
