const buttons = document.querySelectorAll('.marks button');
const submit = document.querySelector('.submit button');
const selectedNum = document.querySelector('.selected span');
let selected = 0;

const section = document.querySelector('section:nth-child(1)');
const sectionThanks = document.querySelector('section:nth-child(2)');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btnOff => {
            btnOff.classList.remove('selected-button');
        })
        selected = button.value;
        button.classList.add('selected-button');


    })
})

submit.addEventListener('click', () => {
    if (selected === 0) {
        alert('Select number!!')
        return
    } else {
        selectedNum.innerHTML = selected;
    }
    section.className = 'display';
    sectionThanks.classList.remove('display');
})