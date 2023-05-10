import {
  container, header, form, titletext, contactpage, listTab, addingTab, contactTab,
} from '../index.js';
import { error } from './error.js';
import { inputSave } from './localstorage.js';

// create a single book template
export const inputTitle = document.querySelector('.title');
export const inputAuthor = document.querySelector('.author');
export const addButton = document.querySelector('.add');

// create showcase for books
export const bookDisplay = document.createElement('div');
bookDisplay.classList.add('bookDisplay');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let bookHolder = [];

export const addBook = () => {
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
};

export const deleteBook = (event) => {
  const button = event.target;
  const instance = button.parentNode;
  instance.remove();
  const index = button.getAttribute('data-index');
  bookHolder = bookHolder.filter((book, i) => i !== parseInt(index, 10));
  localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
};

// display the books that were inserted
export const display = () => {
  // displaying all the books
  for (let i = 0; i < bookHolder.length; i++) {
    const bookInstance = document.createElement('article');
    bookInstance.classList.add('dercounter');
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
};

// storage for books
if (localStorage.getItem('storedBooks')) {
  bookHolder = JSON.parse(localStorage.getItem('storedBooks'));
  display();
}

addButton.addEventListener('click', () => {
  // validate before adding
  if (inputTitle.value === '' || inputAuthor.value === '') {
    form.append(error);
    form.insertBefore(error, inputTitle);
    error.style.display = 'block';
    inputTitle.value = '';
    inputAuthor.value = '';
  } else {
    error.style.display = 'none';
    addBook();
    bookDisplay.innerHTML = '';
    display();
  }
});

// mssg for no books
const bookarticles = document.querySelectorAll('.dercounter');
const directive = document.createElement('span');
directive.classList.add('directive');
directive.textContent = 'No books have been added yet';

export const bookMessage = () => {
  // when no books have been added yet
  if (bookarticles.length > 0) {
    directive.style.display = 'none';
  } else {
    bookDisplay.append(directive);
    directive.style.display = 'block';
  }
};

export default bookHolder;