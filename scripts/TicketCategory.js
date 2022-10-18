import { selectCategory, cards, printResult, btnBuy, btnResult } from "./varElements.js";

export default function ticketCategory() {
/* Cuando cambio la seleccion cambio las tarjetas */
selectCategory.addEventListener("change", () => {
  let card = document.getElementById(["target" + selectCategory.value]);
  selectCategory.value !== "Ninguna" ? (card.checked = true) : false;
  printResult.textContent = "";
  btnBuy.style.display = "none";
  btnResult.style.display = "block";
});

/* Cuando cambio las tarjetas cambio la seleccion */
cards.forEach((card) => {
  let optionSelect = selectCategory.querySelector(`[id*="${card.value}"`);

  card.addEventListener("click", () => {
    if (card.value === optionSelect.value) {
      optionSelect.selected = "selected";
      printResult.textContent = "";
      btnBuy.style.display = "none";
      btnResult.style.display = "block";
    }
  });
});
}