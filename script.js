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

}

function displayBooks() {

}

const addBookButton = document.querySelector('.addBookButton');
const addBooksModal = document.querySelector('.addBookModal');
const modalFullscreenBackground = document.querySelector('.modalBackground');

addBookButton.addEventListener('click', () => {
    addBooksModal.classList.add('showModal');
    modalFullscreenBackground.style.display = "block";
    modalFullscreenBackground.style.pointerEvents = "auto";
});

// Close modal on outside click

document.addEventListener('click', (e) => {
    if (e.target == modalFullscreenBackground) {
        addBooksModal.classList.remove('showModal');
        modalFullscreenBackground.style.display = "none";
        modalFullscreenBackground.style.pointerEvents = "none";
    }
});


// document.addEventListener('click', (e) => {
//     let clickInside = addBooksModal.contains(e.target);

//     if (!clickInside && modalShowing) {
//         addBooksModal.classList.remove('showModal');
//         modalShowing = false;
//         console.log("REEE");
//     }
// });


// Remove the "Confirm Form Resubmission" prompt on page refresh
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}