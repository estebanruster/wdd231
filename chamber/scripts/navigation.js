/*Handling the nav bar and menu button*/
const hambutton = document.querySelector("#ham-button");
const nav = document.querySelector("#nav-bar");

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle("show");
    nav.classList.toggle("show")
});

/*Handling wayfinding in the menu*/
let wayfinding = document.querySelector(".current");
