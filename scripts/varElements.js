const selectCategory = document.getElementById("selectCategory");
const cards = document.querySelectorAll("[id*='target']");
const btnResult = document.querySelector("#result");
const btnReset = document.querySelector("[type='reset']");
const inputAmount = document.querySelector("#amount");
const printResult = document.querySelector("#printResult");
const modalTicket = document.querySelector("#ticket");

export {
  selectCategory,
  cards,
  btnResult,
  printResult,
  inputAmount,
  btnReset,
  modalTicket,
};
