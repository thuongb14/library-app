const addBookForm = document.querySelector('.form-control')
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.book');
const cardSection = document.querySelector('.card-section');
const searchForm = document.querySelector('.search-input')
const searchInput = document.getElementById('search');

function removeForm() {
    overlay.classList.remove('open-overlay');
    addBookForm.classList.remove('open-form');
};

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    };

};

let myLibrary = [];

class Form {
    addBookPopUp(){
        overlay.classList.add('open-overlay');
        addBookForm.classList.add('open-form')
    };

    outerClick() {
        document.addEventListener('click', function(e){
            if(e.target.classList.contains('overlay')) {
                removeForm()
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                removeForm()
            }
        });
    };

    addNewBook(book) {
    book.title = document.querySelector('#title').value;
    book.author = document.querySelector('#author').value;
    book.pages = document.querySelector('#pages').value;
    book.read = document.querySelector('#read').checked;
    myLibrary.push(book)
    };

};

class UI {
    makeCard(book) {
        const card = document.createElement('div');
        card.classList.add('card');
        cardSection.appendChild(card);  
        const p1 = card.appendChild(document.createElement('p'));   
        const p2 = card.appendChild(document.createElement('p'));  
        const p3 = card.appendChild(document.createElement('p')); 
        const readButton = document.createElement('button');
        const removeButton = document.createElement('button');
        readButton.classList.add('read-button');
        removeButton.classList.add('remove-button');
        card.appendChild(readButton);
        card.appendChild(removeButton);
        removeButton.textContent = 'Remove';
        p1.textContent = book.title;
        p2.textContent = book.author;
        p3.textContent = book.pages;
        if(book.read === false) {
            readButton.textContent = 'Unread'
            readButton.style = 'background-color: red';
            card.style = 'border-color: red';
        } else if (book.read === true) {
            readButton.textContent = 'Read';
        };

        searchInput.addEventListener('keyup', function() {
            let filter = searchInput.value.toLowerCase();
            if (card.firstElementChild.textContent.includes(filter)) {
                
            }
        })

    };

    removeCard(e) {
        if(e.target.textContent === 'Remove' && confirm('Are you sure to remove this book?')) {
            e.target.parentElement.remove();

        }
    };

    toggleReadButton(e, book) {
        if (e.target.textContent === 'Unread') { 
            book.read = true;
            e.target.textContent = 'Read';
            e.target.style = 'background-color: var(--button-color)';
            e.target.parentElement.style = 'border-color: var(--button-color)';
        } else if (e.target.textContent === 'Read') {
            book.read = false;
            e.target.textContent = 'Unread';
            e.target.style = 'background-color: red';
            e.target.parentElement.style = 'border-color: red';
        };
    };


    //run for myLibrary.length loop, check if i.title contains filter => card.firstChild.contains.title.style = display block/;

};

const book = new Book();

const bookForm = new Form();

const ui = new UI();

document.querySelector('.button').addEventListener('click', function() {
    bookForm.addBookPopUp();
})

window.addEventListener('click', function(e) {
    bookForm.outerClick();
    ui.removeCard(e)
    ui.toggleReadButton(e, book)
});

form.addEventListener('submit', function(e) {
    e.preventDefault()
    bookForm.addNewBook(book);
    removeForm();
    form.reset()
    ui.makeCard(book);
});



