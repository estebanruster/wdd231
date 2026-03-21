const url = "./data/members.json";
const cards = document.querySelector('.cards');
let condition = true;

async function getCompanieData() {
    const response = await fetch(url);
    const data = await response.json();

    if (condition) {
        cardTemplate(data.companies);
    } else {
        listTemplate(data.companies);
    }

    //return data.companies;
}

function cardTemplate(companies) {
    companies.forEach((companie) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let business = document.createElement('p');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = `${companie.name}`;
        business.textContent = `Business line: ${companie.businessLine}`;
        if (companie.membershipLevel === 3) {
            membership.textContent = `GOLD`;
        }
        if (companie.membershipLevel === 2) {
            membership.textContent = `SILVER`;
        }
        else {
            membership.textContent = `Member`;
        }
        address.textContent = `${companie.address}`;
        phone.textContent = `Phone number: ${companie.phoneNumber}`;
        website.setAttribute('href', `${companie.websiteUrl}`);
        website.textContent = `${companie.websiteUrl}`;
        logo.setAttribute('src', companie.image);
        logo.setAttribute('alt', `Logo of ${companie.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        card.appendChild(name);
        card.appendChild(business);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);
        cards.appendChild(card);
    });
}

function listTemplate(companies) {
    companies.forEach((companie) => {
        /*
        let membership = "";
        if (companie.membershipLevel === 3) {
            membership = `GOLD`;
        }
        if (companie.membershipLevel === 2) {
            membership = `SILVER`;
        }
        else {
            membership = `Member`;
        }
        */

        let list = document.createElement('ul');
        let name = document.createElement('li');
        let business = document.createElement('li');
        //let membershipLvl = document.createElement('li');
        //let address = document.createElement('li');
        let phone = document.createElement('li');

        name.textContent = `${companie.name}`;
        business.textContent = `${companie.businessLine}`;
        //membershipLvl.textContent = `${membership}`;
        //address.textContent = `${companie.address}`;
        phone.textContent = `${companie.phoneNumber}`;

        list.appendChild(name);
        list.appendChild(business);
        //list.appendChild(membershipLvl);
        //list.appendChild(address);
        list.appendChild(phone);
        cards.appendChild(list);
    });
}

const listView = document.querySelector("#list");
listView.addEventListener("click", () => {
    condition = false;
    cards.innerHTML = '';
    cards.classList.add('display-list');
    cards.classList.remove('cards');
    getCompanieData();
});

const cardView = document.querySelector("#card");
cardView.addEventListener("click", () => {
    condition = true;
    cards.innerHTML = '';
    cards.classList.add('cards');
    cards.classList.remove('display-list');
    getCompanieData();
});

getCompanieData();