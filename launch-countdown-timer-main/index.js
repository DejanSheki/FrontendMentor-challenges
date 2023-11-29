const date = new Date();
date.setDate(date.getDate() + 14);
console.log(date);

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

console.log(countDownDate);

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds
    document.getElementById("demo-bottom").innerHTML = seconds
    document.getElementById("demo-center").innerHTML = seconds
    document.querySelector('.flop').classList.add('flop-anim');

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// function getCardElements(card) {
//   const cardElementTop = card.querySelector('.card-element__top');
//   const cardElementBottom = card.querySelector('.card-element__bottom');

//   const cardElementFlip = card.querySelector('.card-element-flip');
//   const cardElementFlipTop = card.querySelector('.card-element-flip__top');
//   const cardElementFlipBottom = card.querySelector('.card-element-flip__bottom');

//   return {
//     cardElementTop,
//     cardElementBottom,
//     cardElementFlip,
//     cardElementFlipTop,
//     cardElementFlipBottom
//   };
// }

// function updateCardValues(
//   cardElement,
//   cardElementFlip,
//   value
// ) {
//   cardElement.textContent = value;
//   cardElementFlip.textContent = value;
// }

// function updateDateElement(cardElement, cardElementValue) {
//   const cardElements =
//     getCardElements(cardElement);

//   if (parseInt(cardElements.cardElementTop.textContent, 10) === cardElementValue) {
//     return;
//   }

//   cardElements.cardElementFlip.classList.add('anim');

//   updateCardValues(
//     cardElements.cardElementTop,
//     cardElements.cardElementFlipBottom,
//     cardElementValue
//   );

//   function endAnimation() {
//     cardElements.cardElementFlip.classList.remove('anim');
//     updateCardValues(
//       cardElements.cardElementBottom,
//       cardElements.cardElementFlipTop,
//       cardElementValue
//     );

//     this.removeEventListener(
//       'animationend',
//       endAnimation
//     );
//   }

//   cardElements.cardElementFlip.addEventListener(
//     'animationend',
//     endAnimation
//   );
// }

// function updateDateElementValue(elementId, elementValue) {
//   const firstNumber = Math.floor(elementValue / 10) || 0;
//   const secondNumber = elementValue % 10 || 0;
//   const cards = document.getElementById(elementId);
//   const cardElements = cards.querySelectorAll('.card-element');

//   updateDateElement(cardElements[0], firstNumber);
//   updateDateElement(cardElements[1], secondNumber);
// }

// function getRemainingTime(target) {
//   const currentTime = Date.now();
//   const complete = currentTime >= target;

//   if (complete) {
//     return {
//       complete,
//       seconds: 0,
//       minutes: 0,
//       hours: 0,
//       days: 0
//     };
//   }

//   const secondsRemaining = Math.floor(
//     (target - currentTime) / 1000
//   );
//   const days = Math.floor(secondsRemaining / 24 / 60 / 60);
//   const hours = Math.floor(secondsRemaining / 60 / 60) - days * 24;
//   const minutes = Math.floor(secondsRemaining / 60) - days * 24 * 60 - hours * 60;
//   const seconds = secondsRemaining % 60;

//   return {
//     complete,
//     seconds,
//     minutes,
//     hours,
//     days
//   };
// }

// function updateAllElements() {
//   const timeRemainingForUpdate = getRemainingTime(
//     new Date(date).getTime()
//   );

//   updateDateElementValue('seconds', timeRemainingForUpdate.seconds);
//   updateDateElementValue('minutes', timeRemainingForUpdate.minutes);
//   updateDateElementValue('hours', timeRemainingForUpdate.hours);
//   updateDateElementValue('days', timeRemainingForUpdate.days);


//   return timeRemainingForUpdate.complete;
// }

// const countdownInterval = setInterval(() => {
//   const isComplete = updateAllElements();

//   if (isComplete) {
//     clearInterval(countdownInterval);
//   }
// }, 1000);

// updateAllElements();