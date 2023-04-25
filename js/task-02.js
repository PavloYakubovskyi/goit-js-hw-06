const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.getElementById("ingredients");

const makeIngr = (ingredient) => {
  let liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
};

const elements = ingredients.map(makeIngr);
ingredientsEL.append(...elements);
