// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість -
// червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", (e) => {
  e.currentTarget.value.length ===
  Number(e.currentTarget.getAttribute("data-length"))
    ? e.currentTarget.classList.add("valid")
    : e.currentTarget.classList.add("invalid");
});

inputRef.addEventListener("focus", (e) => {
  e.currentTarget.removeAttribute("class");
});
