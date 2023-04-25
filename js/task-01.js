const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}\n\n`);

const itemRef = categoriesRef.querySelectorAll(".item");

itemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}\n\n`);
});
