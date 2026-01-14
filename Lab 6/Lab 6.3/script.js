function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];

    this.addBook = function (title, type) {
        this.content.push({ title, type });
    };

    this.deleteBook = function (title) {
        this.content = this.content.filter(book => book.title !== title);
    };

    this.countBooks = function () {
        return this.content.length;
    };

    this.toString = function () {
        return `Box (${this.height}x${this.width}x${this.length}) made of ${this.material}. Books inside: ${this.countBooks()}`;
    };

    this.valueOf = function () {
        return this.countBooks();
    };
}

const box1 = new Box(10, 10, 20, "Cardboard");
box1.addBook("A Certain Woman", "Novel");
box1.addBook("Leaves of Narcissus", "Novel");
box1.addBook("The Days", "Autobiographical");

const box2 = new Box(5, 5, 5, "Plastic");
box2.addBook("The Hobbit", "Story");

document.getElementById('boxInfo').innerText = box1.toString();

let listHtml = "<h3>Books:</h3>";
box1.content.map(b => listHtml += `<div class="book-item">${b.title} (${b.type})</div>`);
document.getElementById('bookList').innerHTML = listHtml;

document.getElementById('arithmetic').innerText = `Total books in the boxe: ${box1}`;