export function productTemplate(data) {
    data.products.forEach((product) => {
        const cards = document.querySelector('.cards');
        //creating elements for the cards in the catalogue
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let price = document.createElement('p');
        //.join for the array
        let color = document.createElement('p');
        let size = document.createElement('p');
        //img element
        let photo = document.createElement('img');

        //modifying the elements with the data in products
        name.textContent = `${product.name}`;
        price.textContent = `${product.price}`;
        color.innerHTML = `Color: ${product.color.join(', ')}`;
        size.innerHTML = `Size: ${product.size.join(', ')}`;

        photo.setAttribute('src', product.image);
        photo.setAttribute('alt', `Photo of ${product.name}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '200');
        photo.setAttribute('height', '300');

        if (cards) {
            card.appendChild(name);
            card.appendChild(photo);
            card.appendChild(price);
            card.appendChild(color);
            card.appendChild(size);
            cards.appendChild(card);
        }
    });
}