/*Handling the nav bar and menu button*/
const hambutton = document.querySelector("#ham-button");

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
});