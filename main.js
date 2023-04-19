import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = true;
$(function () {
  init();
 
});
function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
  const FEJLEC = $("th");
  FEJLEC.on("click", function () {
    console.log(event.target.id);
    rendezesiSzempontKulcs = event.target.id;
    rendezes(ADATLISTA, rendezesiSzempontKulcs);
    init();
  });
}
function osszeAllit(lista) {
  for (let i = 0; i < ADATLISTA.length; i++) {
    const row = document.createElement("tr");
    const nevCell = document.createElement("td");
    nevCell.textContent = ADATLISTA[i].nev;
    const korCell = document.createElement("td");
    korCell.textContent = ADATLISTA[i].kor;
    const fajtaCell = document.createElement("td");
    fajtaCell.textContent = ADATLISTA[i].fajta;
    row.appendChild(nevCell);
    row.appendChild(korCell);
    row.appendChild(fajtaCell);
    table.appendChild(row);
  }

  
}
