var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every(fruit => typeof fruit === "string");

let someStartWithA = fruits.some(fruit => fruit.startsWith("a"));

let filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));

let likedFruits = fruits.map(fruit => `I like ${fruit}`);

const resultsDiv = document.getElementById("results");

const display = (label, value) => {
    resultsDiv.innerHTML += `
        <div class="result-item">
            <span class="label">${label}</span>
            <span class="value">${Array.isArray(value) ? value.join(", ") : value}</span>
        </div>
    `;
};

display("Original Array:", fruits);
display("Is every element a string?", allStrings);
display("Does at least one start with 'a'?", someStartWithA);
display("Fruits that starts with 'b' or 's':", filteredFruits);
display("Mapped Messages:", likedFruits);