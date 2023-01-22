function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumberEl = document.querySelector('#controls');
const divBoxCreate = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');

let inputValue = 0;
inputNumberEl.addEventListener('input', event => {
    inputValue = +event.target.value;
});
btnCreateEl.addEventListener('click', event => {
    let boxSizeWidth = 0;
    let boxSizeHeigth = 0;
    for (let i = 1; i <= inputValue; i += 1) {
        divBoxCreate.insertAdjacentHTML(
            'beforeend',
            `<span style="background-color: ${getRandomHexColor()}; display: block;
    width: ${(boxSizeWidth += 30)}px; height: ${(boxSizeHeigth += 30)}px; "></span>`
        );
    }
});
btnDestroyEl.addEventListener('click', event => {
    divBoxCreate.innerHTML = '';
    document.querySelector('#controls input').value = '';
});
