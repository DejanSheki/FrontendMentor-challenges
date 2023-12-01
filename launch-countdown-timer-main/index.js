const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


const countDownDate = new Date().setDate(new Date().getDate() + 14);

setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = countDownDate - currentDate;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hr = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);


    days.childNodes[1].firstChild.textContent = day;
    days.childNodes[5].firstChild.textContent = day;
    hours.childNodes[1].firstChild.textContent = hr;
    hours.childNodes[5].firstChild.textContent = hr;
    minutes.childNodes[1].firstChild.textContent = min;
    minutes.childNodes[5].firstChild.textContent = min;

    seconds.childNodes[1].firstChild.textContent = sec;
    // seconds.childNodes[1].classList.add('flip-top');
    // seconds.childNodes[3].classList.add('flip-top-back');
    seconds.childNodes[3].firstChild.textContent = sec;
    seconds.childNodes[7].firstChild.textContent = sec;
    // seconds.childNodes[9].firstChild.textContent = sec;

}, 1000);

console.log(seconds.childNodes);
console.log(seconds.childNodes[5].firstChild);


// cardTopBack.addEventListener('animationstart', e => {
//     cardTop.firstElementChild.textContent = startNumber - 1
//     cardTopBack.firstElementChild.textContent = startNumber - 1
//     cardTopFix.firstElementChild.textContent = startNumber - 1
// });

// cardTopBack.addEventListener('animationend', e => {
//     cardBottom.firstElementChild.textContent = startNumber - 1
// });

// cardTop.addEventListener('animatioend', e => {
//     cardTop.firstElementChild.textContent = startNumber - 1
// });

