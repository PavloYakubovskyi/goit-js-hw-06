// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів
// в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const categoriesItemsRef = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesItemsRef.length}\n\n`);

// categoriesItemsRef.forEach((item) => {
//   const itemTitleRef = item.querySelector("h2");
//   const itemElements = item.querySelectorAll("li");

//   console.log(`Category: ${itemTitleRef.textContent}`);
//   console.log(`Elements: ${itemElements.length}\n\n`);
// });

// друний спосіб завдяки властивостям по навігації по DOM які мають ієрархічне відношення

const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}\n\n`);

const itemRef = categoriesRef.querySelectorAll(".item");

console.log(
  itemRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}\n\n`);
  })
);
