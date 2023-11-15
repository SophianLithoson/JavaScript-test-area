const currentLibrary = [];

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = function () {
        return title + " by " + author + ", " + numPages + " pages, " + ((isRead) ? "has been read" : "not read yet");
    }
}

function addBookToLibrary(tome) {
    currentLibrary += tome;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, true);
const soiaf = new Book("Song of Ice and Fire", "G.R.R. Martin", 835, false);

console.log(theHobbit.info());
console.log(soiaf.info());