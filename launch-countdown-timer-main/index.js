const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
console.log(seconds.childNodes);

const countDownDate = new Date().setDate(new Date().getDate() + 14);


let previous;

setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = countDownDate - currentDate;


    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hr = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);


    days.childNodes[1].firstChild.textContent = day;
    days.childNodes[3].firstChild.textContent = day;
    days.childNodes[5].firstElementChild.textContent = day;
    days.childNodes[9].firstChild.textContent = day;

    hours.childNodes[1].firstChild.textContent = hr;
    hours.childNodes[3].firstChild.textContent = hr;
    hours.childNodes[5].firstElementChild.textContent = hr;
    hours.childNodes[9].firstChild.textContent = hr;

    minutes.childNodes[1].firstChild.textContent = min;
    minutes.childNodes[3].firstChild.textContent = min;
    minutes.childNodes[5].firstElementChild.textContent = min;
    minutes.childNodes[9].firstChild.textContent = min;

    if (sec === 0) {
        minutes.childNodes[1].classList.add('animation');
    }
    if (sec === 0 && min === 0) {
        hours.childNodes[1].classList.add('animation');
    }
    if (sec === 0 && min === 0 && hr) {
        days.childNodes[1].classList.add('animation');
    }

    seconds.childNodes[1].firstChild.textContent = sec;
    seconds.childNodes[1].classList.add('animation');
    setTimeout(() => {
        seconds.childNodes[1].classList.remove('animation');
        minutes.childNodes[1].classList.remove('animation');
        seconds.childNodes[5].firstElementChild.textContent = sec;
        seconds.childNodes[9].firstChild.textContent = sec;
    }, 400)
    seconds.childNodes[3].firstChild.textContent = sec;

}, 1000);

const flipTopBack = [{ transform: 'rotateX(180deg)' }, { zIndex: 0 }]
const flipTopBackTiming = { duration: 350, animationDelay: 300 }

seconds.childNodes[1].addEventListener('animationend', (e) => {
    seconds.childNodes[5].animate(flipTopBack, flipTopBackTiming);
});

minutes.childNodes[1].addEventListener('animationend', (e) => {
    minutes.childNodes[5].animate(flipTopBack, flipTopBackTiming);
});

hours.childNodes[1].addEventListener('animationend', (e) => {
    hours.childNodes[5].animate(flipTopBack, flipTopBackTiming);
});



// const countToDate = new Date().setHours(new Date().getHours() + 2080);
// let previous;
// setInterval(() => {
//     const currentDate = new Date();
//     const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
//     if (timeBetweenDates !== previous) {
//         flipAllCards(timeBetweenDates);
//     }
//     previous = timeBetweenDates;
// }, 250);
// function flipAllCards(time) {
// const days = Math.floor(time / (24 * 3600));
// const hours = Math.floor((time / 3600) % 24);
// const minutes = Math.floor((time / 60) % 60);
// const seconds = Math.floor(time % 60);
// const daysCard = document.querySelector('.days > .flip-card');
// const hoursCard = document.querySelector('.hours > .flip-card');
// const minutesCard = document.querySelector('.minutes > .flip-card');
// const secondsCard = document.querySelector('.seconds > .flip-card');
// flipCard(daysCard, days);
// flipCard(hoursCard, hours);
// flipCard(minutesCard, minutes);
//     flipCard(secondsCard, seconds);
// }
// function flipCard(flipCard, time) {
//     time = String(time).padStart(2, '0');
//     const currentValue = seconds.childNodes[1].firstChild.innerText;
//     if (time == currentValue) return;
//     seconds.childNodes[1].classList.add('animation');
//     seconds.childNodes[1].firstChild.innerText = time;
// const bottomFlip = document.createElement('div');
// bottomFlip.classList.add('bottom-flip');
// bottomFlip.innerText = time;
// const topHalf = flipCard.querySelector('.top');
// const bottomHalf = flipCard.querySelector('.bottom');
// topFlip.addEventListener('animationstart', () => {
//     topHalf.innerText = time;
// })
// topFlip.addEventListener('animationend', () => {
//     topFlip.remove()
// });
// bottomFlip.addEventListener('animationend', () => {
//     bottomHalf.innerText = time;
//     bottomFlip.remove()
// });
// }