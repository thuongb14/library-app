const addBookForm = document.querySelector('.form-control')
const addBookButton = document.querySelector('.addBook')
const overlay = document.querySelector('.overlay')

function addBook() {
    overlay.classList.add('open-overlay');
    addBookForm.classList.add('open-form');
}

function remove() {
    document.addEventListener('click', function(e) {
        console.log(e.target)
        if (e.target.classList.contains('overlay')) {
            addBookForm.classList.remove('open-form')
            overlay.classList.remove('open-overlay')
        }
    }
)};

remove()
