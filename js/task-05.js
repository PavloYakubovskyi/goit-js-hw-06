// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.getElementById("name-input"),
  span: document.getElementById("name-output"),
};

refs.input.addEventListener("input", (e) => {
  refs.span.textContent = e.currentTarget.value
    ? e.currentTarget.value.trim()
    : "Anonymous";
});
