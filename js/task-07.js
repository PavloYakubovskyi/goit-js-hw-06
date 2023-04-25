// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль
// span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  inputEl: document.getElementById("font-size-control"),
  textSizeEl: document.getElementById("text"),
};

refs.textSizeEl.style.fontSize = `${refs.inputEl.value}px`;

refs.inputEl.addEventListener("input", (e) => {
  refs.textSizeEl.style.fontSize = `${e.currentTarget.value}px`;
});
