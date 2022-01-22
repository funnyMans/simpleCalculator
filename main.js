const calc = document.querySelector("#calc");
const calcScreen = document.querySelector("#calcScreen");
const calcBody = document.querySelector("#calcBody");
const calcNumbersNode = document.querySelectorAll(".calcNumbers");
const calcOperatorsNode = document.querySelectorAll(".calcOperators");

let display = "";

let calcNumbers = Array.from(calcNumbersNode);
let calcOperators = Array.from(calcOperatorsNode);

calcNumbers.map((number) => {
  number.addEventListener("click", (e) => {
    if (display.length > 10) {
      number.clearEventListener("click");
    } else {
      display += e.target.textContent;
      console.log(display.length);
    }
    calcScreen.textContent = display;
  });
});

calcOperators.map((operator) => {
  operator.addEventListener("click", (e) => {
    console.log(display.length);
    if (operator.textContent === "=") {
      display = parseFloat(eval(calcScreen.textContent)).toFixed(1);

      if (Number(display) > Math.pow(2, 32)) {
        display = "Too large number...";
      } else if (display % 1 === 0) {
        display = parseInt(display);
      }
    } else if (operator.textContent === "AC") {
      display = "";
    } else {
      display += e.target.textContent;
    }
    calcScreen.textContent = display;
  });
});
