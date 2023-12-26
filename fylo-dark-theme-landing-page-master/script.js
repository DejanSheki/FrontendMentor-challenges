const email = document.querySelector('[name="email"]');
const form = document.querySelector('form');
const errorMsg = document.querySelector('form span');

let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.match(mailformat)) {
        email.setAttribute('aria-invalid', 'false')
        errorMsg.classList.remove('visible');
        errorMsg.classList.add('invisible');
        email.value = '';
    } else {
        errorMsg.classList.add('vvisible');
        errorMsg.classList.remove('invisible');
        email.setAttribute('aria-invalid', 'true')
    }
})