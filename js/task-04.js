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
