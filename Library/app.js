class Book {
  constructor(title, author, pages, isRead = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
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
];

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
        <p class="pages">${book.pages} pages</p>
        <button class="status-btn ${book.isRead ? "read" : "unread"}" onClick="toggleButton(${index})">
          ${book.isRead ? "Read" : "Not Read Yet"}
        </button>
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

// --- Modal Elements & Input References ---
const modalOverlay = document.getElementById("modal-overlay");
const openModalBtn = document.getElementById("add-book-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const addBookForm = document.getElementById("add-book-form");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

const formInputs = [titleInput, authorInput, pagesInput];

// --- Validation Function ---
function validateField(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  input.classList.remove("invalid");

  if (input.validity.valueMissing) {
    if (input === titleInput)
      errorSpan.textContent = "The book title must be filled!";
    if (input === authorInput)
      errorSpan.textContent = "The author name must be filled!";
    if (input === pagesInput)
      errorSpan.textContent = "The page count must be filled!";
    input.classList.add("invalid");
    return false;
  }

  if (
    input === pagesInput &&
    (input.validity.rangeUnderflow || input.value < 1)
  ) {
    errorSpan.textContent = "Page count must be at least 1!";
    input.classList.add("invalid");
    return false;
  }

  return true;
}

// Clear all error messages when resetting or closing modal
function clearValidationErrors() {
  formInputs.forEach((input) => {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = "";
    input.classList.remove("invalid");
  });
}

// Attach Live Validation Listeners
formInputs.forEach((input) => {
  input.addEventListener("blur", () => validateField(input));
  input.addEventListener("input", () => {
    if (input.classList.contains("invalid")) {
      validateField(input);
    }
  });
});

// Modal Actions
openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

function closeModal() {
  modalOverlay.classList.remove("active");
  addBookForm.reset();
  clearValidationErrors();
}

closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// --- Form Submission Handler ---
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  formInputs.forEach((input) => {
    const isValid = validateField(input);
    if (!isValid) isFormValid = false;
  });

  if (!isFormValid) return; // Prevent submission if any input is invalid

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const isRead = document.getElementById("is-read").checked;

  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);

  displayBookToLibrary();
  closeModal();
});
