const overlay = document.querySelector('.overlay');
const addBookForm = document.querySelector('.form-control');
const cardSection = document.querySelector('.card-section');
const searchInput = document.querySelector('#search');
const bookForm = document.querySelector('.book')

class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
  }
};

myLibrary = [];

class Form {
  addBookPopUp() {
    overlay.classList.add('open-overlay');
    addBookForm.classList.add('open-form');
  };
}

class UI {
  removePopUp() {
    addBookForm.classList.remove('open-form')
    overlay.classList.remove('open-overlay')
  };
  
  addBookCard(book) {
    let card = document.createElement('div')
    card.classList.add('card');
    cardSection.appendChild(card);
    const p1 = card.appendChild(document.createElement('p'));
    const p2 = card.appendChild(document.createElement('p'));
    const p3 = card.appendChild(document.createElement('p'));
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')
    readButton.classList.add('read-button')
    removeButton.classList.add('remove-button')
    card.appendChild(readButton);
    card.appendChild(removeButton);
    removeButton.textContent = 'Remove'

    // display form data on card
    p1.textContent = book.title;
    p2.textContent = `Author: ${book.author}`;
    p3.textContent = `Pages: ${book.pages}`;
    if (book.read === false) {
        readButton.textContent = 'Unread'
        readButton.style = 'background-color: red';
        card.classList.add('button-unread')
    } else {
        readButton.textContent = 'Read';
        card.classList.add('button-read')
    }


    //toggle read button style & change read status in array object
    readButton.onclick = function() {
      if (book.read === false) { 
          book.read = true;
          readButton.textContent = 'Read'
          readButton.style = 'background-color: var(--button-color)';
          card.setAttribute('class', 'card button-read')
      } else if (book.read === true) {
          book.read = false
          card.setAttribute('class', 'card button-unread')
          readButton.textContent = 'Unread'
          readButton.style = 'background-color: red'
      }     
    }
  
    myLibrary.forEach((book) => {
        //remove book card and book data from myLibrary array object
      removeButton.onclick = function (e, index) {
        if (confirm('Are you sure to remove this book?')) {
          e.target.parentElement.remove()
          myLibrary.splice(index, 1)
          }
      }
        searchInput.addEventListener('keyup', function() {
            let filter = searchInput.value.toLowerCase();
            if(book.title.toLowerCase().startsWith(filter)) {
                card.style = '';
            } else {
                card.style = 'display: none';
            }
        })
    })
  };
}

//event when click the button to open form
document.querySelector('.add-book').addEventListener('click', function(e) {
  e.preventDefault();
  const form = new Form()
  form.addBookPopUp();
})

//event when submit the form - get book and append book to card
document.querySelector('.form-control').addEventListener('submit', function(e) {
  e.preventDefault();
  const book = new Book(title, author, pages, read);
  
//get the book value
  book.title = document.querySelector('#title').value;
  book.author = document.querySelector('#author').value;
  book.pages = document.querySelector('#pages').value;
  book.read = document.querySelector('#read').checked;
  
//push the book to array
  myLibrary.push(book);
  
  const ui = new UI();
  ui.removePopUp()
  ui.addBookCard(book)
  bookForm.reset()
})

//event when click on document
window.addEventListener('click', function(e){
  const ui = new UI();
  if (e.target.classList.contains('overlay')) {
      ui.removePopUp();
  }
})