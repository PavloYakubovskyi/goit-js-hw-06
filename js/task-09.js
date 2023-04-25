function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  changeColorDisplay: document.querySelector(".color"),
  colorBody: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", () => {
  // const randomColor = getRandomHexColor();
  refs.colorBody.style.backgroundColor = getRandomHexColor();
  refs.changeColorDisplay.innerText = refs.colorBody.style.backgroundColor;
});
