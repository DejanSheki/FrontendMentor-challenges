const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

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
        days.childNodes[1].classList.remove('animation');
        hours.childNodes[1].classList.remove('animation');
        minutes.childNodes[1].classList.remove('animation');
        seconds.childNodes[1].classList.remove('animation');
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
days.childNodes[1].addEventListener('animationend', (e) => {
    days.childNodes[5].animate(flipTopBack, flipTopBackTiming);
});
