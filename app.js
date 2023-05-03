document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable no-plusplus */
// document structure selection
  const container = document.querySelector('.container');
  const header = document.querySelector('.Pagetitle');
  const form = document.querySelector('.form');

  // create showcase for books
  const bookDisplay = document.createElement('div');
  bookDisplay.classList.add('bookDisplay');

  // document structuring
  container.append(header, bookDisplay, form);

  // create a single book template
  const inputTitle = document.querySelector('.title');
  const inputAuthor = document.querySelector('.author');
  const addButton = document.querySelector('.add');

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  let bookHolder = [];

  // storage for inputs
  const inputStorage = JSON.parse(localStorage.getItem('inputdata')) || {};
  inputTitle.value = inputStorage.inputTitle || '';
  inputAuthor.value = inputStorage.inputAuthor || '';

  function inputSave() {
    inputStorage.inputTitle = inputTitle.value;
    inputStorage.inputAuthor = inputAuthor.value;

    localStorage.setItem('inputdata', JSON.stringify(inputStorage));
  }

  inputTitle.addEventListener('input', inputSave);
  inputAuthor.addEventListener('input', inputSave);

  // add a single book
  function addBook() {
    const titleData = inputTitle.value;
    const authorData = inputAuthor.value;

    const newBook = new Book(titleData, authorData);

    bookHolder.push(newBook);

    // store the updated array in local storage
    localStorage.setItem('storedBooks', JSON.stringify(bookHolder));

    // clean the input
    inputTitle.value = '';
    inputAuthor.value = '';
    inputSave();
  }

  function deleteBook(event) {
    const button = event.target;
    const instance = button.parentNode;
    instance.remove();
    const index = button.getAttribute('data-index');
    bookHolder = bookHolder.filter((book, i) => i !== parseInt(index, 10));
    localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
  }

  // display the books that were inserted
  function display() {
    // displaying all the books
    for (let i = 0; i < bookHolder.length; i++) {
      const bookInstance = document.createElement('article');
      const dispTitle = document.createElement('h2');
      dispTitle.innerHTML = bookHolder[i].title;
      const dispAuthor = document.createElement('p');
      dispAuthor.innerHTML = bookHolder[i].author;
      const delButton = document.createElement('button');
      delButton.innerHTML = 'remove';
      delButton.classList.add('delButton');
      delButton.setAttribute('data-index', i);
      delButton.addEventListener('click', deleteBook);
      const hrline = document.createElement('hr');
      bookInstance.append(dispTitle, dispAuthor, delButton, hrline);
      bookDisplay.append(bookInstance);
    }
  }

  // storage for books
  if (localStorage.getItem('storedBooks')) {
    bookHolder = JSON.parse(localStorage.getItem('storedBooks'));
    display();
  }

  // create an error mssg
  const error = document.createElement('span');
  error.innerHTML = 'please fill out all these fields';

  addButton.addEventListener('click', () => {
    // validate before adding
    if (inputTitle.value === '' || inputAuthor.value === '') {
      bookDisplay.append(error);
      inputTitle.value = '';
      inputAuthor.value = '';
    } else {
      addBook();
      bookDisplay.innerHTML = '';
      display();
    }
  });
});