let displayValue = "";

//! function for button

function createButton(value, clickHandler) {
  let btn = document.createElement("button");
  btn.innerText = value;
  btn.addEventListener("click", clickHandler);
  return btn;
}

//! Concatanating new value to existing display value.

function appendDisplay(value) {
  displayValue += value;

  //! set new value as updated display value
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

//! To calculate

function calculate() {
  
    //! setting value to the input field

  try {
    displayValue = eval(displayValue).toString();
    document.getElementById("display").value = displayValue;
  } catch {
    document.getElementById("display").value = "error";
  }
}

//! Creating buttons

let buttons = [
  ["clear", clearDisplay],
  [".", () => appendDisplay(".")],
  ["x", () => appendDisplay("*")],
  ["/", () => appendDisplay("/")],
  ["6", () => appendDisplay("6")],
  ["7", () => appendDisplay("7")],
  ["8", () => appendDisplay("8")],
  ["9", () => appendDisplay("9")],
  ["2", () => appendDisplay("2")],
  ["3", () => appendDisplay("3")],
  ["4", () => appendDisplay("4")],
  ["5", () => appendDisplay("5")],
  ["1", () => appendDisplay("1")],
  ["0", () => appendDisplay("0")],
  ["00", () => appendDisplay("00")],
  ["-", () => appendDisplay("-")],
  ["+", () => appendDisplay("+")],

  ["=", calculate],
];
//! variable to store buttons created

let buttonsContainer = document.getElementById("buttons");

buttons.forEach(([value, clickHandler]) => {
  let button = createButton(value, clickHandler);
  buttonsContainer.appendChild(button);
});

let;
