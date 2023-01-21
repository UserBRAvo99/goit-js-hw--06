const formEl = document.querySelector('.login-form');
console.log(formEl);
const userData = {};
formEl.addEventListener('submit', event => {
    event.preventDefault();

    const emailEl = event.currentTarget.elements.email.value;
    const passwordEl = event.currentTarget.elements.password.value;
    // const {
    //     elements: { email, password },
    // } = event.currentTarget;

    if (emailEl === '' || passwordEl === '') alert('Будь ласка заповнітьвсі поля');
    userData.email = emailEl;
    userData.password = passwordEl;
    console.log(userData);
});
