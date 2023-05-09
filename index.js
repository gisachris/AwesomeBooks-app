/* eslint-disable import/no-cycle */
import { inputStorage, inputSave, bookSave } from './modules/localstorage.js';
import { error } from './modules/error.js';
import {
  bookDisplay,
} from './modules/book.js';
import { listOn, addOn, contactOn } from './modules/navigation.js';
import { timeArea } from './modules/time.js';

// document structure selection
const container = document.querySelector('.container');
const header = document.querySelector('.Pagetitle');
const form = document.querySelector('.form');

container.append(header, bookDisplay, form);

const listTab = document.querySelector('.list');
listTab.addEventListener('click', listOn);
const addingTab = document.querySelector('.adding');
addingTab.addEventListener('click', addOn);
const contactTab = document.querySelector('.cont');
contactTab.addEventListener('click', contactOn);

// the h2 tag
const titletext = document.querySelector('.titletext');

// the contact page
const contactpage = document.querySelector('.contact');

export {
  container, header, form, bookDisplay, titletext, contactpage, listTab, addingTab, contactTab,
};

// when the page loads
document.addEventListener('DOMContentLoaded', () => {
  listOn();
});