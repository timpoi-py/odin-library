const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookProgress = document.getElementById("progress");
const submitBtn = document.getElementById("submit-btn");

const bookCards = document.querySelector(".book__cards");
// window.addEventListener("click", () => console.log(progress.value));

const bookList = [];

function Form(title, author, page, progress) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.progress = progress;
}

function creatingNewBook() {
  return new Form(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookProgress.value
  );
}

function resetForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookProgress.value = "";
}

function createBookCard() {
  let book = creatingNewBook();

  if (
    !(
      book.title == "" ||
      book.author == "" ||
      book.page == "" ||
      book.progress == ""
    )
  ) {
    let bookCard = document.createElement("div");
    let titleElem = document.createElement("h3");
    let authorElem = document.createElement("p");
    let pagesElem = document.createElement("p");
    bookCard.classList.add("book__card");

    titleElem.textContent = book.title;
    authorElem.textContent = book.author;
    pagesElem.textContent = book.page;
    bookCards.appendChild(bookCard);
    bookCard.appendChild(titleElem);
    bookCard.appendChild(authorElem);
    bookCard.appendChild(pagesElem);
  }
}

submitBtn.onclick = () => {
  createBookCard();
  resetForm();
};
