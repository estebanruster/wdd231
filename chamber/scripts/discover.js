//importing de JSON module data and local storage function
import { places } from "../data/places.mjs";
import { localS } from "./localstorage.mjs";

//console.log(places);
const discover = document.querySelector('#discover');

function discoverCard(places) {
    //forEach loop to create a div for each of the 8 objects in the array of the JSON
    places.forEach(place => {
        let card = document.createElement('div');
        //creating all the child elements of the div
        let title = document.createElement('h2');

        //creating the figure tag and its child elements for the image
        let figure = document.createElement('figure');
        let photo = document.createElement('img');
        let caption = document.createElement('figcaption');
        //

        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');

        //putting the JSON data in the created elements
        title.textContent = `${place.name}`;
        
        photo.setAttribute('src', place.image_url);
        photo.setAttribute('alt', `Photo of ${place.name}`);
        if (place.image_url == './images/discover-aqueduct-queretaro.webp' || place.image_url == './images/discover-downtown-queretaro.webp') {
            photo.setAttribute('fetchpriority', 'high');
        };
        //photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '200');
        caption.textContent = `View of ${place.name}`;

        address.textContent = `${place.address}`;
        description.textContent = `${place.description}`;
        button.setAttribute('type', 'button');
        button.textContent = 'learn more';

        //appending the child elements to make it part of the html document
        figure.appendChild(photo);
        figure.appendChild(caption);

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        discover.appendChild(card);
    });
}

discoverCard(places);
localS();