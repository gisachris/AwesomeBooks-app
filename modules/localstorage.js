/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import bookHolder, {
  addBook, deleteBook, inputTitle, inputAuthor, addButton,
} from './book.js';
// storage for inputs
export const inputStorage = JSON.parse(localStorage.getItem('inputdata')) || {};
inputTitle.value = inputStorage.inputTitle || '';
inputAuthor.value = inputStorage.inputAuthor || '';

export const inputSave = () => {
  inputStorage.inputTitle = inputTitle.value;
  inputStorage.inputAuthor = inputAuthor.value;

  localStorage.setItem('inputdata', JSON.stringify(inputStorage));
};

export const bookSave = () => {
  localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
};

export const storedBooks = JSON.parse(localStorage.getItem('storedBooks'));
