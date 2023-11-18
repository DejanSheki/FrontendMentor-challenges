const details = document.querySelector('.details');
const crewList = document.querySelectorAll('.crew-list ul li');
const crewContainer = document.querySelector('.crew-container');

async function fetchData(crewDesc = 0) {
    const data = await fetch('../data.json');
    const myData = await data.json();
    const crew = await myData.crew;

    const div = document.createElement('div');
    details.innerHTML = '';
    crewContainer.innerHTML = '';
    div.innerHTML = `
        <h2>${crew[crewDesc].role}</h2>
        <h1>${crew[crewDesc].name}</h1>
        <p>${crew[crewDesc].bio}</p>  
    `;
    details.appendChild(div);

    const image = new Image();
    image.src = crew[crewDesc].images.webp;
    image.alt = crew[crewDesc].name;
    crewContainer.appendChild(image);
}

fetchData();

crewList.forEach(item => {
    item.addEventListener('click', (e) => {
        const crewDesc = e.target.value;
        fetchData(crewDesc);
    });
});

crewList.forEach(navElement => {
    navElement.addEventListener('click', ({ target }) => {
        for (const item of crewList) {
            item.classList.toggle('li-active', target === item);
        }
    });
});
