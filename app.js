const addBookForm = document.querySelector('.form-control')
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.book');
const cardSection = document.querySelector('.card-section');
const searchForm = document.querySelector('.search-input')
const searchInput = document.getElementById('search')

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

let myLibrary = [];

function addBookPopUp() {
    overlay.classList.add('open-overlay');
    addBookForm.classList.add('open-form');
}

function removePopUp() {
    addBookForm.classList.remove('open-form')
    overlay.classList.remove('open-overlay')
}
// objArray.map(a => a.foo)
function outerClick() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            removePopUp()
        }
    }
)};

//Exit Popup by clicking outer space
outerClick()

//handle key event
document.addEventListener('keydown', (event) => {
    let name = event.key;
    if (name === 'Escape') {
      removePopUp();
    }
})

function addNewBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(book.title, book.author, book.pages)
}

//get data from form and push the value into array.
form.addEventListener('submit', function(e) {;
    e.preventDefault();
    addNewBook();
    removePopUp();
    form.reset()
})

//Display the newest added book from form input 
function displayBook(title, author, pages, read) {

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
    p1.textContent = title;
    p2.textContent = `Author: ${author}`;
    p3.textContent = `Pages: ${pages}`;
    if (read === false) {
        card.style = 'border-color: red';
    }
    if (read === false) {
        readButton.textContent = 'Unread'
        readButton.style = 'background-color: red';
    } else {
        readButton.textContent = 'Read';
    }

    //toggle read button style & change read status in array object
    myLibrary.forEach((book) => {
        if (book.read === false) { 
          card.style = 'border-color: red';
          readButton.textContent = 'Unread'
          readButton.style = 'background-color: red';
        } else if (book.read === true) {
            console.log(book.read, book.title)
            card.style = 'border-color: var(--button-color)';
            readButton.textContent = 'Read'
            readButton.style = 'background-color: var(--button-color)'
        }

        readButton.onclick = function() {
            if (book.read === false) { 
                book.read = true;
                card.style = 'border-color: var(--button-color)';
                readButton.textContent = 'Read'
                readButton.style = 'background-color: var(--button-color)';
            } else if (book.read === true) {
                book.read = false
                card.style = 'border-color: red';
                readButton.textContent = 'Unread'
                readButton.style = 'background-color: red'
            }     
        }

        //remove book card and book data from myLibrary array object
        removeButton.onclick = function(e) {
            if(confirm('Are you sure to remove this book?')) {
            e.target.parentElement.remove()
            myLibrary = myLibrary.filter(book => book.title !== title)
            }
        }

        searchInput.addEventListener('keyup', function() {
            filter = searchInput.value.toLowerCase();
            if(title.toLowerCase().includes(filter) || author.toLowerCase().includes(filter)) {
                card.style = 'display: block'
            } else {
                card.style = 'display: none'
            }
        })
    })
}


