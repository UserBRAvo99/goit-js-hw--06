const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', event => {
    event.target.classList.remove('invalid', 'valid');
    if (event.currentTarget.value.length === 0) return;
    if (event.target.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.add('valid');
    } else {
        validationInputEl.classList.add('invalid');
    }
});
