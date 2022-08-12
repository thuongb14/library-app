const addBookForm = document.querySelector('.form-control')
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.book');

//get value of form


console.log(title)

let showTitle = document.querySelector('.book-title')
let showAuthor = document.querySelector('.book-author')
let showPages = document.querySelector('.book-pages')
let showRead = document.querySelector('.book-read')

//get data from form and push to card
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = form.elements['title'].value;
    let author = form.elements['author'].value;
    let pages = form.elements['pages'].value;
    let read = form.elements['read'].value
    showTitle.textContent = `Title: ${title}`;
    showAuthor.textContent = `Author: ${author}`;
    showPages.textContent = `Pages: ${pages}`;
    showRead.textContent = `Have read: ${read}`;

    removePopUp()
})

function addBookPopUp() {
    overlay.classList.add('open-overlay');
    addBookForm.classList.add('open-form');
}

function removePopUp() {
    addBookForm.classList.remove('open-form')
    overlay.classList.remove('open-overlay')
}

function outerClick() {
    document.addEventListener('click', function(e) {
        console.log(e.target)
        if (e.target.classList.contains('overlay')) {
            removePopUp()
        }
    }
)};


const submitButton = document.querySelector('.submit-form')
// submitButton.addEventListener('click', function(e) {
//     addBookForm.classList.remove('open-form')
//     overlay.classList.remove('open-overlay')
// });

                
    
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

outerClick()
