// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const refs = {
//   inputEl: document.getElementById("name-input"),
//   nameEl: document.getElementById("name-output"),
// };

// refs.inputEl.addEventListener("input", onInputChange);

// function onInputChange() {
//   refs.nameEl.textContent = refs.inputEl.value;

//   if (refs.inputEl.value.trim() === "") {
//     refs.nameEl.textContent = "Anonymous";
//   }
// }

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
