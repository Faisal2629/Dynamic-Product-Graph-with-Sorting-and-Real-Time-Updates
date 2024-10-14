// Data structure to hold the product list
let products = [];

// DOM elements
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const ratingInput = document.getElementById('rating');
const addProductButton = document.getElementById('addProduct');
const sortByPriceButton = document.getElementById('sortByPrice');
const sortByRatingButton = document.getElementById('sortByRating');

const priceGraph = document.getElementById('priceGraph');
const ratingGraph = document.getElementById('ratingGraph');

// Function to update the bar graphs
function updateGraphs() {
    // Clear the current graphs
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    // Update price graph
    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.classList.add('bar');
        priceBar.innerHTML = `<span>${product.name}</span><div class="price-bar" style="width: ${product.price * 3}px;">$${product.price}</div>`;
        priceGraph.appendChild(priceBar);
    });

    // Update rating graph
    products.forEach(product => {
        const ratingBar = document.createElement('div');
        ratingBar.classList.add('bar');
        ratingBar.innerHTML = `<span>${product.name}</span><div class="rating-bar" style="width: ${product.rating * 50}px;">${product.rating}</div>`;
        ratingGraph.appendChild(ratingBar);
    });
}

// Function to add a new product
function addProduct() {
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const rating = parseFloat(ratingInput.value);

    if (name && !isNaN(price) && !isNaN(rating) && rating >= 1 && rating <= 5) {
        products.push({ name, price, rating });
        updateGraphs();
        nameInput.value = '';
        priceInput.value = '';
        ratingInput.value = '';
    } else {
        alert('Please provide valid input for all fields');
    }
}

// Sorting functions
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}

// Event listeners
addProductButton.addEventListener('click', addProduct);
sortByPriceButton.addEventListener('click', sortByPrice);
sortByRatingButton.addEventListener('click', sortByRating);
