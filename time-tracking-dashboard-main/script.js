const tabs = document.querySelectorAll(".links li");

tabs.forEach((tab) => {
  tab.addEventListener("click", ({ target }) => {
    console.log(target);
    for (const item of tabs) item.classList.toggle("active", target === item);
  });
});

// async function fetchApi(url) {
//   const dataFetch = await fetch(url); //test
//   const data = await dataFetch.json();
//   console.log(data);
//   return data;
// }

// fetchApi("data.json");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => showInfo(data));

function showInfo(data) {
  console.table(data.countries);
}
