const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readBook = function() {
    this.read ? this.read = false : this.read = true;
};

function addBookToLibrary() {
    let book = new Book(document.getElementById('titleInput').value,
                        document.getElementById('authorInput').value,
                        document.getElementById('pagesInput').value,
                        document.getElementById('readItInput').checked);

    // Create and add book DOM element
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
    readButton.textContent = book.read ? "Not Read" : "Read";
    readButton.style.backgroundColor = book.read ? "rgb(255, 34, 34)" : "green";
    bookElement.appendChild(readButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    bookElement.appendChild(removeButton);

    const booksGrid = document.querySelector('.booksGrid');
    booksGrid.appendChild(bookElement);

    // Add data-attribute to associate DOM element with book object
    myLibrary.push(book);
    bookElement.setAttribute("data-index", myLibrary.length-1);

    readButton.addEventListener('click', () => {
        readBook(book, readButton);
    });

    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(bookElement);
    });

}

function readBook(book, readButtonElement) {
    book.readBook();
    if (book.read) {
        readButtonElement.style.backgroundColor = "rgb(255, 34, 34)";
        readButtonElement.textContent = "Not Read";
    } else {
        readButtonElement.style.backgroundColor = "green";
        readButtonElement.textContent = "Read";
    }

}

function removeBookFromLibrary(book) {
    const booksGrid = document.querySelector('.booksGrid');
    booksGrid.removeChild(book);
    let bookIndex = book.getAttribute("data-index");
    myLibrary.splice(myLibrary.indexOf(bookIndex), 1);
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

function switchDarkLightMode() {
    let root = document.querySelector(":root");
    let darkLightImage = document.querySelector(".darkLightImage");
    if (darkMode) {
        root.style.setProperty('--foreground', 'white');
        root.style.setProperty('--background', 'rgb(226, 226, 226)');
        root.style.setProperty('--font-color', 'black');
        // Set specific styling for the lightmode modal popup (inverting the background
        // and foreground colors looks better on the input fields)
        root.style.setProperty('--modal-foreground','rgb(226, 226, 226)');
        root.style.setProperty('--modal-background','white');
        // Switch icon
        darkLightImage.src='images/moon.svg';
    } else {    
        root.style.setProperty('--foreground', 'rgb(15, 15, 15)');
        root.style.setProperty('--background', 'rgb(44, 44, 44)');
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--modal-foreground','rgb(15, 15, 15)');
        root.style.setProperty('--modal-background','rgb(44, 44, 44)');
        darkLightImage.src='images/sun.svg';
    }
    darkMode = !darkMode;
}

const addBookButton = document.querySelector('.addBookButton');
const addBooksModal = document.querySelector('.addBookModal');
const modalFullscreenBackground = document.querySelector('.modalBackground');
const submitButton = document.querySelector('.submitBook');
let submitFlag = false;
let darkMode = true;

// Open modal
addBookButton.addEventListener('click', () => {
    openModal();
});

// Close modal on outside click
document.addEventListener('click', (e) => {
    closeModal(e);
});

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

// Lightmode Darkmode Button
const darkLightButton = document.querySelector(".darkLightButton");
darkLightButton.addEventListener('click', () => {
    switchDarkLightMode();
});