const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //   return this.read === "yes" ? `${this.title} by ${this.author}, ${this.pages}, read already`
    //                              : `${this.title} by ${this.author}, ${this.pages}, not read yet`; 
    // }
  }

function addBookToLibrary() {
    let book = new Book(document.getElementById('titleInput').value,
                        document.getElementById('authorInput').value,
                        document.getElementById('pagesInput').value,
                        document.getElementById('readItInput').checked);
    myLibrary.push(book);

    const bookElement = document.createElement("div");
    bookElement.classList.add("bookCard");

    const title = document.createElement("h2");
    title.textContent = book.title;
    bookElement.appendChild(title);
    const author = document.createElement("h2");
    author.textContent = book.author;
    bookElement.appendChild(author);
    const pages = document.createElement("h2");
    pages.textContent = book.pages;
    bookElement.appendChild(pages);

    const readButton = document.createElement("button");
    readButton.classList.add("readButton");
    readButton.textContent = "Read";
    bookElement.appendChild(readButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    bookElement.appendChild(removeButton);

    const booksGrid = document.querySelector('.booksGrid');
    booksGrid.appendChild(bookElement);

    displayBooks();
}

function displayBooks() {
    // for (let i = 0; i < myLibrary.length; i++) {
    //     const book = document.createElement("div");

    // }
}

// function createTestBooks() {
//     let book1 = new Book("testing", "jer", 23, true);
//     let book2 = new Book("title2", "jer2", 223, true);
//     let book3 = new Book("booger aids", "jer3", 4, false);
//     const book1Element = document.createElement("div");
//     const book2Element = document.createElement("div");
//     const book3Element = document.createElement("div");
//     book1Element.classList.add("bookCard");
//     book2Element.classList.add("bookCard");
//     book3Element.classList.add("bookCard");
//     const booksGrid = document.querySelector('.booksGrid');
//     booksGrid.appendChild(book1Element);
//     booksGrid.appendChild(book2Element);
//     booksGrid.appendChild(book3Element);

//     const title1 = document.createElement("h2");
//     title1.textContent = book1.title;
//     book1Element.appendChild(title1);
//     const author1 = document.createElement("h2");
//     author1.textContent = book1.author;
//     book1Element.appendChild(author1);
//     const pages1 = document.createElement("h2");
//     pages1.textContent = book1.pages;
//     book1Element.appendChild(pages1);

//     const readButton = document.createElement("button");
//     readButton.classList.add("readButton");
//     readButton.textContent = "Read";
//     book1Element.appendChild(readButton);

//     const removeButton = document.createElement("button");
//     removeButton.classList.add("removeButton");
//     removeButton.textContent = "Remove";
//     book1Element.appendChild(removeButton);

//     myLibrary.push(book1);
//     myLibrary.push(book2);
//     myLibrary.push(book3);
// }
// createTestBooks();

function removeBookFromLibrary() {


}

function openModal() {
    addBooksModal.classList.add('showModal');
    modalFullscreenBackground.style.display = "block";
    modalFullscreenBackground.style.pointerEvents = "auto";
}

function closeModal(e) {
    if (e.target == modalFullscreenBackground || submitFlag) {
        addBooksModal.classList.remove('showModal');
        modalFullscreenBackground.style.display = "none";
        modalFullscreenBackground.style.pointerEvents = "none";
        addBookForm.reset();
    }
}


const addBookButton = document.querySelector('.addBookButton');
const addBooksModal = document.querySelector('.addBookModal');
const modalFullscreenBackground = document.querySelector('.modalBackground');
const submitButton = document.querySelector('.submitBook');
let submitFlag = false;

// Open modal
addBookButton.addEventListener('click', () => {
    openModal();
});

// Close modal on outside click
document.addEventListener('click', (e) => {
    closeModal(e);
});

// const submitButton = document.querySelector('.submitBook');
// submitButton.addEventListener('click', () => {

// });


// Remove the "Confirm Form Resubmission" prompt on page refresh
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

// Form submission
const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();    
    addBookToLibrary();
    submitFlag = true;
    closeModal(e);
    submitFlag = false;
});