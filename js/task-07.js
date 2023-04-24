// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль
// span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  inputEl: document.getElementById("font-size-control"),
  textEl: document.getElementById("text"),
};

const data = {
  inputEl: 0,
  textEl: 0,
  calc() {
    this.inputEl = this.textEl;
  },
};

dataFill();

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange({ target }) {
  const { value } = target;

  if (target === refs.inputEl) {
    refs.textEl.style.fontSize = `${value}px`;
  }

  target.setAttribute("value", value);
  dataFill();
  // refs.textEl.style.fontSize = `${e.target.value}px`
}

function dataFill() {
  data.inputEl = Number(refs.inputEl.value);
  data.textEl = Number(refs.textEl.value);
}
