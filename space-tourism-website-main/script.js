const explore = document.querySelector('.oval a');
const shadow = document.querySelector('.oval');
const hoverLine = document.querySelectorAll('.hover-line');
const menuElement = document.querySelectorAll('.menu ul li a');

menuElement.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.add('active');
    })
})

menuElement.forEach(element => {
    element.addEventListener('mouseleave', (e) => {
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.remove('active');
    })
})


explore.addEventListener('mouseenter', () => {
    shadow.classList.add('shadow');
})
explore.addEventListener('mouseleave', () => {
    shadow.classList.remove('shadow');
})

document.addEventListener("DOMContentLoaded", function () {
    // const links = document.querySelectorAll(".item_menu a");

    menuElement.forEach(link => {
        /*let slug = link.getAttribute("href").split("/").reverse()[0];
        if (window.location.href.indexOf(slug) > -1) {
          link.classList.add('active');
        }*/
        console.log(link);

        if (window.location.href === link.getAttribute("href")) {
            link.classList.add('active');
            console.log(window.location.href);
        }
    });
});