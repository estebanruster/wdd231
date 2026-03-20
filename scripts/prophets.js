/*const url variable to contain the url of the JSON document with
key/value pairs of prophets information*/
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

/*const cards for the div element with #cards ID*/
const cards = document.querySelector('#cards');

/*async function to fetch url data and parse it*/
async function getProphetData() {
    const response = await fetch(url); //Fetch API request for the JSON in the 'url' variable
    const data = await response.json(); //parse the JSON data
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

/*displayProphets arrow function to create the cards of the prophets
array of the JSON file of the url*/
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        //populating the heading
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        //building image element by setting attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}.`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData();
