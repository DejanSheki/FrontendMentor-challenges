const explore = document.querySelector('.oval a');
const shadow = document.querySelector('.oval');
const menuElement = document.querySelectorAll('.menu ul li a');
// const hamburger = document.querySelectorAll('.hamburger img');
// const menu = document.querySelector('.menu');

// hamburger.forEach(element => {
//     element.addEventListener('click', () => {
//         menu.style.display = 'flex';
//     });
// });

document.addEventListener("DOMContentLoaded", (e) => {
    menuElement.forEach(link => {
        // console.log(link);

        if (window.location.href === link.getAttribute("href")) {
            link.nextElementSibling.classList.add('active');
            console.log(window.location.href);
        }
    });
});

menuElement.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.add('hovered');
    })
})

menuElement.forEach(element => {
    element.addEventListener('mouseleave', (e) => {
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.remove('hovered');
    })
})


if (explore) {
    explore.addEventListener('mouseenter', () => {
        shadow.classList.add('shadow');
    })

    explore.addEventListener('mouseleave', () => {
        shadow.classList.remove('shadow');
    })
}


