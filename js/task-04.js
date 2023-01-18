const counterValue = document.querySelector('#value');
const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

incrementEl.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});
decrementEl.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});
