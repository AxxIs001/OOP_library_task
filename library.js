class Book {
    constructor(title, author, year, isRead = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }
}

const myLibrary = new Library();

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, true);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("All books in the library:", myLibrary.books);

console.log("\nToggling read status of '1984'...");
book1.toggleReadStatus();

console.log("\nUnread books:", myLibrary.getUnreadBooks());

console.log("\nRemoving 'To Kill a Mockingbird'...");
myLibrary.removeBook("To Kill a Mockingbird");

console.log("\nAll books in the library after removal:", myLibrary.books);
