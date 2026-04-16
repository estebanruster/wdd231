/*Sara Mangas Creaciones script that imports all the functions and or attributes
needed from the modules and manage the addEventListener*/
import { dates } from "./dates.mjs";
import { modals } from "./modals.mjs";

//Handling hambutton for navigation
const hambutton = document.querySelector("#ham-button");
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle("show");
    document.querySelector("#nav-bar").classList.toggle("show");
});

dates();
modals();