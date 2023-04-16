// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.getElementById("ingredients");

// for of варто використовувати з перериваням циклу
// for (const ingredient of ingredients) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   ingredientsEL.append(itemEl);
// }
// console.log(ingredientsEL);

// forEach
ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  ingredientsEL.append(itemEl);
});
console.log(ingredientsEL);
