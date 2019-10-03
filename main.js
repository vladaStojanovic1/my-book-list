// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoreBooks = [
            {
                title: 'Book One',
                author: 'Vlada S',
                isbn: '232424'
            },
            {
                title: 'Book Two',
                author: 'Vlada S',
                isbn: '349359'
            }
        ];

        const books = StoreBooks;

        books.forEach((book) => {
            return UI.addBookToList(book);
        })
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }
}

// Store CLass: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    // Add book to list
    UI.addBookToList(book);

    //Clear fields
    UI.clearFields();
})
// Event: Remove a Book