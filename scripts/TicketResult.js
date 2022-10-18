import {
  btnResult,
  btnBuy,
  printResult,
  inputAmount,
  selectCategory,
  btnReset,
  modalTicket,
} from "./varElements.js";

export default function ticketResult() {
  /* Resumen */
  btnResult.addEventListener("click", () => {
    let costo = 200;
    if (inputAmount.value > 0) {
      if (selectCategory.value === "Estudiante")
        printResult.textContent = (costo - costo * 0.8) * inputAmount.value;
      if (selectCategory.value === "Trainee")
        printResult.textContent = (costo - costo * 0.5) * inputAmount.value;
      if (selectCategory.value === "Junior")
        printResult.textContent = (costo - costo * 0.15) * inputAmount.value;
      if (selectCategory.value === "Ninguna")
        printResult.textContent = costo * inputAmount.value;
    }
  });

  /* Agregando resets al boton Borrar  */
  btnReset.addEventListener("click", () => {
    printResult.textContent = "";
    btnResult.classList.add("disabled");
    modalTicket.classList.remove("glitchHideToolTip");
    btnBuy.style.display = "none";
    btnResult.style.display = "block";
  });

  /* Tooltip */
  btnResult.classList.add("disabled");
  const resultTooltE = btnResult.parentNode;
  const tooltip = bootstrap.Tooltip.getOrCreateInstance(resultTooltE);

  formTicket.addEventListener("input", () => {
    if (inputAmount.value > 0 && selectCategory.value) {
      btnResult.classList.remove("disabled");
      modalTicket.classList.add("glitchHideToolTip");
      btnResult.addEventListener('click' , (e) => {
        e.target.style.display = "none";
        btnBuy.style.display = "block";
      })
    } else {
      btnResult.classList.add("disabled");
      modalTicket.classList.remove("glitchHideToolTip");
    }
  });
}