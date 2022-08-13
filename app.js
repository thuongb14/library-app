const addBookForm = document.querySelector('.form-control')
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.book');
const cardSection = document.querySelector('.card-section');


//get data from form and push the value into array.
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary(
    form.elements['title'].value,  
    form.elements['author'].value, 
    form.elements['pages'].value,
    form.elements['read'].checked) // checked is true, unchecked is false
    removePopUp()
    displayBook()
    // form.reset()
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
        if (e.target.classList.contains('overlay')) {
            removePopUp()
        }
    }
)};

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const myLibrary = [];


//Exit Popup by clicking outer space
outerClick()

document.addEventListener('keydown', (event) => {
    let name = event.key;
    if (name === 'Escape') {
      removePopUp();
    }
})





//this will display the newest added book 
function displayBook() {

    //create card and append elements into it.
    let card = document.createElement('div')
    card.classList.add('card');
    cardSection.appendChild(card);
    const p1 = card.appendChild(document.createElement('p'));
    const p2 = card.appendChild(document.createElement('p'));
    const p3 = card.appendChild(document.createElement('p'));
    const readButton = document.createElement('button')
    readButton.classList.add('read-button')
    const removeButton = document.createElement('button')
    removeButton.classList.add('remove-button')
    card.appendChild(readButton);
    card.appendChild(removeButton);
    removeButton.textContent = 'Remove'

    // display form data on card
    p1.textContent = `Title: ${myLibrary[myLibrary.length-1].title}`;
    p2.textContent = `Author: ${myLibrary[myLibrary.length-1].author}`;
    p3.textContent = `Pages: ${myLibrary[myLibrary.length-1].pages}`;
    if (myLibrary[myLibrary.length-1].read === false) {
        card.style = 'border-color: red';
    }
    if (myLibrary[myLibrary.length-1].read === false) {
        readButton.textContent = 'Unread'
        readButton.style = 'background-color: red';
    } else {
        readButton.textContent = 'Read';
    }

    // toggle read button
    readButton.addEventListener('click', function() {
        if (readButton.textContent === 'Unread') {
            readButton.textContent = 'Read';
            readButton.style = 'background-color: var(--button-color)';
            card.style = 'border-color: var(--button-color)';
        } else if (readButton.textContent === 'Read') {
            readButton.textContent = 'Unread';
            readButton.style = 'background-color: red';
            card.style = 'border-color: red';
        }
    })

    //remove button
}


