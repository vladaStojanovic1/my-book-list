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
}

// Store CLass: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add Book

// Event: Remove a Book