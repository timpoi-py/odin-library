const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookProgress = document.getElementById("progress");
const submitBtn = document.getElementById("submit-btn");

const bookCards = document.querySelector(".book__cards");
// window.addEventListener("click", () => console.log(progress.value));

const booksList = [];

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
    bookCard.setAttribute("data-title", book.title);
    bookCard.setAttribute("data-author", book.author);
    bookCard.setAttribute("data-page", book.page);
    bookCard.setAttribute("data-progress", book.progress);
    // bookCard.setAttribute("data-index");

    titleElem.textContent = book.title;
    authorElem.textContent = book.author;
    pagesElem.textContent = book.page;
    bookCards.appendChild(bookCard);
    bookCard.appendChild(titleElem);
    bookCard.appendChild(authorElem);
    bookCard.appendChild(pagesElem);

    let btnDiv = document.createElement("div");
    let progressBtn = document.createElement("input");
    let editBtn = document.createElement("input");
    let deleteBtn = document.createElement("input");

    editBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "edit");
    deleteBtn.setAttribute("value", "delete");
    progressBtn.setAttribute("value", book.progress);
    progressBtn.setAttribute("type", "button");

    bookCard.appendChild(btnDiv);
    btnDiv.appendChild(progressBtn);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    btnDiv.classList.add("btns");
    editBtn.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn");
    progressBtn.classList.add("progressBtn");

    deleteBtn.onclick = () => {
      deletingInList(bookCard);
      deletingBookCard(bookCard);
    };

    progressBtn.onclick = () => {
      changeProgressBtn(progressBtn);
      editListProgress(progressBtn, titleElem, authorElem, pagesElem);
      editDataProgress(bookCard, progressBtn);
    };
  }
}

function deletingInList(bookCard) {
  let bookToRemove = booksList.filter((book) => {
    return book.title == bookCard.dataset.title;
  });

  booksList.splice(bookToRemove[0], 1);
}

function deletingBookCard(bookCard) {
  bookCard.remove();
}

function AddToList() {
  let book = creatingNewBook();

  bookToAdd = {
    title: book.title,
    author: book.author,
    page: book.page,
    progress: book.progress,
  };

  booksList.push(bookToAdd);
}

function changeProgressBtn(btn) {
  if (btn.getAttribute("value") == "Not yet started") {
    btn.setAttribute("value", "Reading");
  } else if (btn.getAttribute("value") == "Reading") {
    btn.setAttribute("value", "Finished");
  } else if (btn.getAttribute("value") == "Finished") {
    btn.setAttribute("value", "Not yet started");
  }
}

function editListProgress(progressBtn, title, author, pages) {
  let editBook = booksList.filter((book) => {
    return book.title == title.textContent && book.author == author.textContent;
  });
  editBook[0].progress = progressBtn.getAttribute("value");
}

function editDataProgress(bookCard, progressBtn) {
  bookCard.dataset.progress = progressBtn.getAttribute("value");
}

submitBtn.onclick = () => {
  AddToList();
  createBookCard();
  resetForm();
};
