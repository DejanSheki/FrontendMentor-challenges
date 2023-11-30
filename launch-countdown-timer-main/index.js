const card = document.querySelector('.card');
const cardTop = document.querySelector('.card-top');
const cardTopBack = document.querySelector('.card-top-back');
const cardBottom = document.querySelector('.card-bottom');
const cardTopFix = document.querySelector('.card-top-fixed');

const countToDate = new Date().setHours(new Date().getHours() + 14);
let previousTimeBetweenDates;

setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    previousTimeBetweenDates = timeBetweenDates;
    const seconds = timeBetweenDates % 60;

    cardTop.firstElementChild.textContent = seconds;
    cardTopBack.firstElementChild.textContent = seconds;
    cardTopFix.firstElementChild.textContent = seconds;

    cardBottom.firstElementChild.textContent = seconds;
}, 1000)


cardTop.classList.add('flip-top');
cardTopBack.classList.add('flip-top-back');




// cardTopBack.addEventListener('animationstart', e => {
//     cardTop.firstElementChild.textContent = startNumber - 1
// });

// cardTopBack.addEventListener('animationstart', e => {
//     cardBottom.firstElementChild.textContent = startNumber - 1
// });

// cardTop.addEventListener('animationstart', e => {
//     cardTop.firstElementChild.textContent = startNumber - 1
// });