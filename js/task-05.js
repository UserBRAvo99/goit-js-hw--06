const nameOutputRef = document.querySelector('#name-output');
const nameInputRef = document.querySelector('#name-input');

nameInputRef.addEventListener('input', event => {
    if (event.currentTarget.value !== '') {
        return (nameOutputRef.textContent = event.currentTarget.value);
    }
    return (nameOutputRef.textContent = 'Anonymous');
});
