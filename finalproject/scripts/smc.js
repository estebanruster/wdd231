/*Sara Mangas Creaciones script that imports all the functions and or attributes
needed from the modules and manage the addEventListener*/
import { dates } from "./dates.mjs";
import { modals } from "./modals.mjs";
import { thankyou } from "./thankyou.mjs";
import { productTemplate } from "./productTemplate.mjs";

//Handling hambutton for navigation
const hambutton = document.querySelector("#ham-button");
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle("show");
    document.querySelector("#nav-bar").classList.toggle("show");
});

//Variable declaration to get the date the form in newsletter is submitted. Needed for the function of thankyou
const timestamp = document.querySelector('#timestamp');
if (timestamp) {
    timestamp.value = new Date().toDateString();
}

//variables declared and async function declared to fecth the JSON in data
const url = "./data/catalogue.json";
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //testing console.log(data);
            productTemplate(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();
thankyou(timestamp);
dates();
modals();