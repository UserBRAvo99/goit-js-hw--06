const nameOutputRef = document.querySelector('#name-output');
const nameInputRef = document.querySelector('#name-input');

nameInputRef.addEventListener('input', event => {
    return event.currentTarget.value !== ''
        ? (nameOutputRef.textContent = event.currentTarget.value)
        : (nameOutputRef.textContent = 'Anonymous');
    // if (event.currentTarget.value !== '') {
    //     return (nameOutputRef.textContent = event.currentTarget.value);
    // }
    // return (nameOutputRef.textContent = 'Anonymous');
});
