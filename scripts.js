// list of things to happen on clicking Submit button
let library = []; 
const form = document.getElementById('input-form');
form.addEventListener('submit', addBook);

// Making and adding new book to the library function
function addBook(e) {
    e.preventDefault();
    addBookToLibrary(formDataInput());
    displayLibrary(library);
    //console.log(library);
}
// 1. data collection

function formDataInput () {
    // 1.1 collect data from form.    
    let title = form['title'].value;
    let author = form['author'].value;
    let pages = form['pages'].value;
    let readStatus = form['status'].value;
    // 1.2 function that makes the book object to store the input
    return new book(title, author, pages, readStatus);
}
// 1.3 make new object with constructor function and data input
function book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = +pages;
    this.readStatus = readStatus;
    this.info = function () {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.readStatus;
    }
}
// 2. add data to the library array
function addBookToLibrary (book) {
    // 2.1 push the new object into the library array.
    library.push(book);
}

// 3. populate html components to fill the library array items.
function displayLibrary (libraryArray) {
    const librarySection = document.getElementById('librarySection');

    for (i=0; i < libraryArray.length; i++){
        // create and declare library section elements
        let bookCard = document.createElement('div');
        let title = document.createElement('h4');
        let author = document.createElement('h4');
        let pages = document.createElement('h4');
        let readStatus = document.createElement('h4');
        let summary = document.createElement('p');
        // add classes and add elements to book card
        bookCard.classList.add('bookCard');
        bookCard.appendChild(title).classList.add('bookTitle');
        bookCard.appendChild(author).classList.add('bookAuthor');
        bookCard.appendChild(pages).classList.add('bookPages');
        bookCard.appendChild(readStatus).classList.add('bookReadStatus');
        bookCard.appendChild(summary).classList.add('summary');
        librarySection.appendChild(bookCard);
        // add content from library array to bookCard
        title.textContent = "Title : " + libraryArray[i].title;
        author.textContent = "Author : " + libraryArray[i].author;
        pages.textContent = "No. of pages read : " + libraryArray[i].pages;
        readStatus.textContent = "Status : " + libraryArray[i].readStatus;
        summary.textContent = "Summary : " + libraryArray[i].info();
    }
}




