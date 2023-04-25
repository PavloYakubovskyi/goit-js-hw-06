const refs = {
  inputEl: document.getElementById("font-size-control"),
  textSizeEl: document.getElementById("text"),
};

refs.textSizeEl.style.fontSize = `${refs.inputEl.value}px`;

refs.inputEl.addEventListener("input", (e) => {
  refs.textSizeEl.style.fontSize = `${e.currentTarget.value}px`;
});
