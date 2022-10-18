const modalTicket = document.querySelector("#ticket");
const cards = document.querySelectorAll("[id*='target']");
const selectCategory = document.getElementById("selectCategory");
const inputAmount = document.querySelector("#amount");
const btnResult = document.querySelector("#result");
const btnBuy = document.querySelector('#buy');
const btnReset = document.querySelector("[type='reset']");
const printResult = document.querySelector("#printResult");

export {
  modalTicket,
  cards,
  inputAmount,
  selectCategory,
  btnResult,
  btnBuy,
  btnReset,
  printResult,
};
