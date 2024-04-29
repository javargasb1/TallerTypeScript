
import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seriesAverage: HTMLElement = document.getElementById("promedio")!;
renderSeriesInTable(series);
calcularPromedioTemporadas(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
  trElement.addEventListener('click', () => showSeriesDetails(serie));
  seriesTbody.appendChild(trElement);
  });
}

function showSeriesDetails(serie: Serie): void{
  const cardImage = document.getElementById("cardImage") as HTMLImageElement;
  const cardTitle = document.getElementById("cardTitle") as HTMLElement;
  const cardSubtitle = document.getElementById("cardSubtitle") as HTMLElement;
  const cardText = document.getElementById("cardText") as HTMLElement;
  const cardLink = document.getElementById("cardLink") as HTMLAnchorElement;  

  cardImage.src = serie.imagenURL;
  cardImage.alt = `Image of ${serie.name}`;
  cardTitle.textContent = serie.name;
  cardSubtitle.textContent = `Channel: ${serie.channel}`;
  cardText.textContent = serie.description;
  cardLink.href = serie.link;
  cardLink.textContent = 'More Info';
} 

function calcularPromedioTemporadas(listadoSeries: Serie[]): void {
  let acumuladoTemporadas = 0;
  listadoSeries.forEach(serie => {
    acumuladoTemporadas += serie.seasons;
  });
  const promedioTemporadas = Math.round(acumuladoTemporadas / listadoSeries.length);
  seriesAverage.textContent = `Average Seasons: ${promedioTemporadas}`;
}
