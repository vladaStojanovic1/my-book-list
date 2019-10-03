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

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className} text-center text-uppercase`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => { document.querySelector('.alert').remove() }, 3000)
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            confirm('Are you sure', el.parentElement.parentElement.remove());
        }
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

    //Validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger')
    } else {

        // Instatiate book
        const book = new Book(title, author, isbn);
        console.log(book);

        // Add book to list
        UI.addBookToList(book);

        //Clear fields
        UI.clearFields();

        // Show succes message
        UI.showAlert('Book Added', 'success')
    }
})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    console.log(e.target);
    UI.deleteBook(e.target);

    //Show succes message
    UI.showAlert('Book removed', 'success')
})