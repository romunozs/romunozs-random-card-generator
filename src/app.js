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

function assignClassAndContent(ids, number) {
  const classMapping = {
    1: { className: "heart", card: "&#x2764;" },
    2: { className: "spade", card: "&#x2660;" },
    3: { className: "diamond", card: "&#x25C6;" },
    4: { className: "clover", card: "&#x2663;" }
  };

  const { className, card = "" } = classMapping[number];

  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);
    if (element) {
      element.classList.add(className);
      element.innerHTML = card;
    }
  }
}

const cardIds = ["cardSuite1", "cardSuite2", "cardSuite3", "cardSuite4"];
const cardNumberText = document.getElementById("cardNumber");

window.onload = function() {
  let cardSuiteNumber = getRandomInteger(1, 4);
  let cardNumber = getRandomInteger(0, 12);
  cardNumberText.innerHTML = cardNumber;
  let cardSuiteDefinition = assignClassAndContent(cardIds, cardSuiteNumber);
};
