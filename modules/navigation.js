import {
  container, header, form, titletext, contactpage, listTab, addingTab, contactTab,
} from '../index.js';
import bookHolder, {
  addBook, deleteBook, inputTitle, inputAuthor, addButton, bookDisplay,
} from './book.js';

export const listOn = () => {
  // changing the h2
  titletext.textContent = 'All Awesome Books';

  // removing other sections
  bookDisplay.style.display = 'block';
  form.style.display = 'none';
  contactpage.style.display = 'none';

  // changing the colors
  if (bookDisplay.style.display === 'block') {
    addingTab.style.color = 'black';
    listTab.style.color = 'blue';
    contactTab.style.color = 'black';
  } else {
    listTab.style.color = 'black';
  }

  window.addEventListener('load', listOn);
};

export const addOn = () => {
  // changing the h2
  titletext.textContent = 'Add a New Book';

  // removing other sections
  bookDisplay.style.display = 'none';
  form.style.display = 'flex';
  contactpage.style.display = 'none';

  // changing the colors
  if (form.style.display === 'flex') {
    addingTab.style.color = 'blue';
    listTab.style.color = 'black';
    contactTab.style.color = 'black';
  } else {
    addingTab.style.color = 'black';
  }

  window.addEventListener('load', addOn);
};

export const contactOn = () => {
  // changing the h2
  titletext.textContent = 'Contact Information';

  // removing other sections
  bookDisplay.style.display = 'none';
  form.style.display = 'none';
  contactpage.style.display = 'block';

  // arrange elements
  const titlesection = document.querySelector('.Pagetitle');
  container.insertBefore(titlesection, contactpage);

  // changing the colors
  if (contactpage.style.display === 'block') {
    addingTab.style.color = 'black';
    listTab.style.color = 'black';
    contactTab.style.color = 'blue';
  } else {
    contactTab.style.color = 'black';
  }

  window.addEventListener('load', contactOn);
};
