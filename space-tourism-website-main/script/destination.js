const destinationsNav = document.querySelectorAll('.destination-list li');
const destinationContent = document.querySelector('.destination-description');
const destinationContainer = document.querySelector('.destination-image');

async function fetchData() {
    const data = await fetch('../data.json');
    const myData = await data.json();

    createMoon(myData);
}

fetchData();

function createMoon(myData) {
    console.log(myData.destinations[0]);
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <h1>${myData.destinations[0].name}</h1>
        <p>${myData.destinations[0].description}</p>
    </div>
    <div class="line-destination"></div>
    <div class="distance-time">
        <div class="distance">
            <p>AVG. DISTANCE</p>
            <h3>${myData.destinations[0].distance}</h3>
        </div>
    <div class="time">
        <p>Est. travel time</p>
        <h3>${myData.destinations[0].travel}</h3>
    </div>
    `;
    destinationContent.appendChild(div);

    const image = new Image();
    image.src = myData.destinations[0].images.webp;
    destinationContainer.appendChild(image);
}


destinationsNav.forEach(navElement => {
    navElement.addEventListener('click', ({ target }) => {
        for (const item of destinationsNav) item.firstElementChild.classList.toggle("underline-active", target === item);
        const myDestination = target.innerText.toUpperCase();
        createContent(myDestination);
    });
});


async function createContent(myDestination) {
    const data = await fetch('../data.json');
    const destinations = await data.json();
    const myDestinations = await destinations.destinations;

    myDestinations.map((element) => {
        if (myDestination === element.name.toUpperCase()) {
            destinationContainer.innerHTML = '';
            destinationContent.innerHTML = '';
            const div = document.createElement('div');
            div.innerHTML = `
            <div>
                <h1>${element.name}</h1>
                <p>${element.description}</p>
            </div>
            <div class="line-destination"></div>
            <div class="distance-time">
                <div class="distance">
                    <p>AVG. DISTANCE</p>
                    <h3>${element.distance}</h3>
                </div>
            <div class="time">
                <p>Est. travel time</p>
                <h3>${element.travel}</h3>
            </div>
            `;
            destinationContent.appendChild(div);

            const image = new Image();
            image.src = element.images.webp;
            destinationContainer.appendChild(image);
        }
    });
}
