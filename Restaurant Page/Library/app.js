class Book {
  constructor(title, author, pages, read = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
  }
  toggleStatus() {
    this.isRead = !this.isRead;
  }
}

let myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
  new Book("Harry Potter", "J.K. Rowling", 454, true),
  new Book("The Test", "Tester", 2, true),
  new Book("New Book", "Zack", 192, false),
  new Book("Bug", "Zack", 1, true),
];

// function Book(title, author, pages, read) {
//   if (!new.target) {
//     throw Error(
//       "You must use the 'new' operator to call the constructor and This is test",
//     );
//   }x1
//   this.id = crypto.randomUUID();
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = read;

//   this.toggleStatus = function () {
//     this.isRead = !this.isRead;
//   };
// }

// const theHobbit = new Book(
//   "The Hobbit",
//   "J.R.R Tolkein",
//   "295 pages",
//   "not read yet",
// );

// const theHarryPotter = new Book(
//   "Harry Potter",
//   "J.K.Rowling",
//   "454 pages",
//   "read",
// );

// const theTest = new Book("The Test", "Tester", "2 pages", "read");

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBookToLibrary() {
  const bookGrid = document.querySelector(".books-grid");
  bookGrid.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = ` 
        <h3 class="title">${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <button class="status-btn ${book.isRead ? "read" : "unread"}" onClick="toggleButton(${index})">${book.isRead ? "Read" : "Not Read Yet"}</button>
        <button class="delete-btn" onClick="deleteButton(${index})">Delete</button>`;
    bookGrid.appendChild(card);
  });
}

function toggleButton(index) {
  myLibrary[index].toggleStatus();
  displayBookToLibrary();
}

function deleteButton(index) {
  myLibrary.splice(index, 1);
  displayBookToLibrary();
}

displayBookToLibrary();

// --- Modal Elements ---
const modalOverlay = document.getElementById("modal-overlay");
const openModalBtn = document.getElementById("add-book-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const addBookForm = document.getElementById("add-book-form");

// Open Modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

// Close Modal Function
function closeModal() {
  modalOverlay.classList.remove("active");
  addBookForm.reset(); // Clear inputs
}

// Close on 'X' button click
closeModalBtn.addEventListener("click", closeModal);

// Close on clicking outside the modal box
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// --- Form Submission ---
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh

  // Get form input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("is-read").checked;

  // Create new book and add to library
  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);

  displayBookToLibrary();
  // Close modal and refresh screen
  closeModal();
});
