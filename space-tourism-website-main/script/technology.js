const btnList = document.querySelectorAll('.technology-list ul li button');
const technologyContent = document.querySelector('.technology-content');
const technologyContainer = document.querySelector('.technology-container');


async function fetchData(terminology = 0) {
    const data = await fetch('../data.json');
    const myData = await data.json();
    const technologyData = await myData.technology;
    console.log(technologyData);

    technologyContent.innerHTML = '';
    technologyContainer.innerHTML = '';
    const div = document.createElement('div');

    div.innerHTML = `
        <h6>THE TERMINOLOGY…</h6>
        <h1>${technologyData[terminology].name}</h1>
        <p>${technologyData[terminology].description}</p>
    `;
    technologyContent.appendChild(div);

    const image = new Image();
    image.src = technologyData[terminology].images.portrait;
    image.alt = technologyData[terminology].name;

    technologyContainer.appendChild(image);

}

fetchData()

btnList.forEach(btn => {
    btn.addEventListener('click', ({ target }) => {
        const terminology = target.value;
        for (const btn of btnList) {
            btn.classList.toggle('active-btn', target === btn);
        }
        fetchData(terminology);
    });
});
