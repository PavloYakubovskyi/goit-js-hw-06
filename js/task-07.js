// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль
// span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  inputFontSizeControl: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.inputFontSizeControl.addEventListener("input", () => {
  refs.text.setAttribute(
    "style",
    `font-size: ${refs.inputFontSizeControl.value}px`
  );
});
