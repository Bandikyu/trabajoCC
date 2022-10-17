import { selectCategory , cards } from "./varElements.js";

/* Cuando cambio la seleccion cambio las tarjetas */
selectCategory.addEventListener("change", () => {
  let card = document.getElementById(["target" + selectCategory.value]);
  selectCategory.value !== "-" ? (card.checked = true) : false;
});

/* Cuando cambio las tarjetas cambio la seleccion */
cards.forEach((card) => {
  let optionSelect = selectCategory.querySelector(`[id*="${card.value}"`);
  
  card.addEventListener("click", () => {
    if (card.value === optionSelect.value) {
      optionSelect.selected = "selected";
    }
  });
});
