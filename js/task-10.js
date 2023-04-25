function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputCountDiv = document.querySelector('#controls [type="number"]');
const blockDiv = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let inputValue = 0;
inputCountDiv.addEventListener("input", (evt) => {
  return (inputValue = evt.currentTarget.value);
});

function createBoxes(amount) {
  amount = inputValue;

  const elements = [];
  const size = 30;
  for (let i = 0; i < amount; i += 1) {
    const elementDiv = document.createElement("div");
    elementDiv.style.backgroundColor = `${getRandomHexColor()}`;
    elementDiv.style.width = `${size + i * 10}px`;
    console.log(elementDiv.style.width);
    elementDiv.style.height = `${size + i * 10}px`;
    elements.push(elementDiv);
  }

  blockDiv.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = ``;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);
