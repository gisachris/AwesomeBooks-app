import bookHolder,{addBook,deleteBook,inputTitle,inputAuthor,addButton} from './book.js';
// storage for inputs
export let inputStorage = JSON.parse(localStorage.getItem('inputdata')) || {};
inputTitle.value = inputStorage.inputTitle || '';
inputAuthor.value = inputStorage.inputAuthor || '';

export function inputSave() {
  inputStorage.inputTitle = inputTitle.value;
  inputStorage.inputAuthor = inputAuthor.value;

  localStorage.setItem('inputdata', JSON.stringify(inputStorage));
}

export function bookSave() {
  localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
}

export let storedBooks = JSON.parse(localStorage.getItem('storedBooks'));
