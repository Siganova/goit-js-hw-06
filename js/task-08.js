const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    console.log(email);

    if (email.value === "" || password.value === "") {
        return alert('Все поля должны быть заполнены');
    }
    console.log({ [email.name]: email.value, [password.name]: password.value });
    event.currentTarget.reset();
});

