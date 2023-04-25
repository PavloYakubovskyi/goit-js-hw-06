const refs = {
  inputEl: document.getElementById("name-input"),
  nameEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", (e) => {
  refs.nameEl.textContent = e.currentTarget.value;

  if (e.currentTarget.value.trim() === "") {
    refs.nameEl.textContent = "Anonymous";
  }
});
