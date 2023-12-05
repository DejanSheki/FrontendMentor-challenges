const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
console.log(seconds.childNodes);

const countDownDate = new Date().setDate(new Date().getDate() + 14);

setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = countDownDate - currentDate;


    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hr = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);


    days.childNodes[1].firstChild.textContent = day;
    days.childNodes[3].firstChild.textContent = day;
    days.childNodes[5].firstChild.textContent = day;
    days.childNodes[9].firstChild.textContent = day;

    hours.childNodes[1].firstChild.textContent = hr;
    hours.childNodes[3].firstChild.textContent = hr;
    hours.childNodes[5].firstChild.textContent = hr;
    hours.childNodes[9].firstChild.textContent = hr;

    minutes.childNodes[1].firstChild.textContent = min;
    minutes.childNodes[3].firstChild.textContent = min;
    minutes.childNodes[5].firstChild.textContent = min;
    minutes.childNodes[9].firstChild.textContent = min;

    seconds.childNodes[1].firstChild.textContent = sec;
    seconds.childNodes[1].classList.add('animation');
    setTimeout(() => {
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

