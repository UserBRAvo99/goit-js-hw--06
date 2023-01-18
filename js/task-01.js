const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoriesItemEl = document.querySelectorAll('.item h2');
categoriesItemEl.forEach(e => {
    console.log(`Category: ${e.textContent}`);
    console.log(`Elements: ${e.nextElementSibling.children.length}`);
});
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
