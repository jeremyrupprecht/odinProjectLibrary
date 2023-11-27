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

// let AddBooks = document.querySelector();


// Remove the "Confirm Form Resubmission" prompt on page refresh
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}