const pageView = document.querySelector('.pageviews span');
const cost = document.querySelector('.cost');
const priceSlider = document.querySelector('#price-slider');
const toggleSlider = document.querySelector('#billing');
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;


priceSlider.addEventListener("input", function () {
    updateValue();
    pageView.innerHTML = pageViews[priceSlider.value];
    // cost.innerHTML = perMonth[priceSlider.value]

    let value = this.value * 25;

    this.style.background = `linear-gradient(to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${value}%,
              hsl(224, 65%, 95%) 0%,
              hsl(224, 65%, 95%) 100%)`;
});

toggleSlider.addEventListener('change', function () {
    if (isYearly === false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateValue();
});

function updateValue() {
    if (isYearly) {
        cost.innerHTML = perMonth[priceSlider.value] * 0.75;
    } else {
        cost.innerHTML = perMonth[priceSlider.value];
    }
}