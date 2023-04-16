// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  counter: document.querySelector("#value"),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", updateCounter);
refs.incrementBtn.addEventListener("click", updateCounter);

function updateCounter(event) {
  counterValue += Number(event.currentTarget.textContent);
  refs.counter.textContent = counterValue;
}
