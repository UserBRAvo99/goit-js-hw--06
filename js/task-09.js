function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColorEl = document.querySelector('.change-color');

btnChangeColorEl.addEventListener('click', event => {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
    document.querySelector('.color').textContent =
        document.querySelector('body').style.backgroundColor;
});
