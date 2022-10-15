const selectCategory = document.getElementById("selectCategory");
let cards = document.querySelectorAll('[id*="target"]');

/* Cuando cambio la seleccion cambio las tarjetas */
selectCategory.addEventListener("change", () => {
  cards.forEach((e) => (e.checked = false));
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
