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
    1: { className: "heart", card: "&#x2665;" },
    2: { className: "spade", card: "&#x2660;" },
    3: { className: "diamond", card: "&#x25C6;" },
    4: { className: "clover", card: "&#x2663;" }
  };

  const { className, card = "" } = classMapping[number];

  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);
    console.log(element);
    if (element) {
      // element.classList.remove(...element.classList);
      // element.classList.add(className);
      element.classList.forEach(existingClass => {
        if (
          existingClass === "heart" ||
          existingClass === "spade" ||
          existingClass === "diamond" ||
          existingClass === "clover"
        ) {
          element.classList.remove(existingClass);
        }
      });

      element.classList.add(className);
      element.innerHTML = card;
    }
  }
}

const cardIds = ["cardSuite1", "cardSuite2", "cardSuite3", "cardSuite4"];
const cardNumberText = document.getElementById("cardNumber");
const dealCardButton = document.getElementById("dealCard");

function initializeDealCard() {
  let cardSuiteNumber = getRandomInteger(1, 4);
  let cardNumber = getRandomInteger(0, 12);
  cardNumberText.innerHTML = cardNumber;

  assignClassAndContent(cardIds, cardSuiteNumber);
  if (cardSuiteNumber == 1 || cardSuiteNumber == 3) {
    cardNumberText.classList.remove("card-title-black");
    cardNumberText.classList.add("card-title-red");
  } else {
    cardNumberText.classList.remove("card-title-red");
    cardNumberText.classList.add("card-title-black");
  }
}

dealCardButton.addEventListener("click", initializeDealCard);

window.onload = function() {
  initializeDealCard();
};
