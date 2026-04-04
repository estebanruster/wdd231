//Asigning button of the memberships to const
const npbutton = document.querySelector('#np');
const bronzebutton = document.querySelector('#bronze');
const silverbutton = document.querySelector('#silver');
const goldbutton = document.querySelector('#gold');
const closenp = document.querySelector('#close-np');
const closebronze = document.querySelector('#close-bronze');
const closesilver = document.querySelector('#close-silver');
const closegold = document.querySelector('#close-gold');

//Asigning modals to const
const npmodal = document.querySelector('#modal-np');
const bronzemodal = document.querySelector('#modal-bronze');
const silvermodal = document.querySelector('#modal-silver');
const goldmodal = document.querySelector('#modal-gold');

//addEventListener to show modals
npbutton.addEventListener('click', () => {
    npmodal.showModal();
});

bronzebutton.addEventListener('click', () => {
    bronzemodal.showModal();
});

silverbutton.addEventListener('click', () => {
    silvermodal.showModal();
});

goldbutton.addEventListener('click', () => {
    goldmodal.showModal();
});

//closing modals
closenp.addEventListener('click', () => {
    npmodal.close();
});

closebronze.addEventListener('click', () => {
    bronzemodal.close();
});
closesilver.addEventListener('click', () => {
    silvermodal.close();
});
closegold.addEventListener('click', () => {
    goldmodal.close();
});

//To change latter; this is for the actual date in the date hidden type input in the form
//geting the actual date for the timestamp
const timestamp = document.querySelector('#timestamp');
timestamp.value = new Date().toDateString();