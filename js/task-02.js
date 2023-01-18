const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const items = ingredients.map(el => {
    let item = document.createElement('li');
    item.textContent = el;
    item.classList.add('item');
    return item;
});

ingredientsEl.append(...items);
