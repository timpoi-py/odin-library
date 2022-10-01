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

function addBtnsInCard(bookCard) {
  let btnDiv = document.createElement("div");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  bookCard.appendChild(btnDiv);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  btnDiv.classList.add("btns");
  editBtn.classList.add("edit-btn");
  deleteBtn.classList.add("delete-btn");

  deleteBtn.textContent = "delete";
  editBtn.textContent = "edit";
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
    addBtnsInCard(bookCard);
  }
}

function deletingBookCard(e) {
  if (e.target.classList.value == "delete-btn") {
    let html = e.path[2];
    html.remove();
  }
}

submitBtn.onclick = () => {
  createBookCard();
  resetForm();
};

bookCards.addEventListener("pointerdown", (e) => {
  deletingBookCard(e);
});
