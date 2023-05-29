/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getCardSuite(number) {
  let card = "";
  switch (number) {
    case 1:
      card = "&#x2764;"; //rojo
      break;
    case 2:
      card = "&#x2660;";
      break;
    case 3:
      card = "&#x25C6;"; //rojo
      break;
    case 4:
      card = "&#x2663;"; //negro
      break;
  }
  return card;
}
const cardSuiteText = document.getElementById("cardSuite");
const cardNumberText = document.getElementById("cardNumber");

window.onload = function() {
  let cardSuiteNumber = getRandomInteger(1, 4);
  if (cardSuiteNumber === 3) {
    cardSuiteText.classList.add("diamond");
  }
  //console.log(cardSuite);
  let cardSuite = getCardSuite(cardSuiteNumber);
  let cardNumber = getRandomInteger(0, 12);
  //console.log(cardNumber);
  cardNumberText.innerHTML = cardNumber;
  cardSuiteText.innerHTML = cardSuite;
};
