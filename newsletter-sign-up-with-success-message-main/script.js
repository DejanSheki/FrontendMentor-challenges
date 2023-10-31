const form = document.querySelector('form');
const errorMessage = document.querySelector('label span');
const email = document.querySelector("input[name='email']");
const main = document.querySelector('main');
const success = document.querySelector('.success');
let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const dismiss = document.querySelector('.success button');
const confMailDisplay = document.querySelector('.success strong');
let confirmationMail;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.match(mailformat)) {
        main.classList.add('hiden');
        confirmationMail = email.value;
        success.classList.add('display');
        confMailDisplay.innerHTML = confirmationMail;
    } else {
        email.classList.add('error-msg')
        errorMessage.style.display = 'flex';
    }
})

dismiss.addEventListener('click', () => {
    email.value = '';
    location.reload();

})