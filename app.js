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

  // storage for books
  if (localStorage.getItem('storedBooks')) {
    bookHolder = JSON.parse(localStorage.getItem('storedBooks'));
    display();
  }

  // storage for inputs
  const inputStorage = JSON.parse(localStorage.getItem('inputdata')) || {};
  inputTitle.value = inputStorage.inputTitle || '';
  inputAuthor.value = inputStorage.inputAuthor || '';

  inputTitle.addEventListener('input', inputSave);
  inputAuthor.addEventListener('input', inputSave);

  function inputSave() {
    inputStorage.inputTitle = inputTitle.value;
    inputStorage.inputAuthor = inputAuthor.value;

    localStorage.setItem('inputdata', JSON.stringify(inputStorage));
  }

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

  // display the books that were inserted
  function display() {
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
  }

  // create an error mssg
  const error = document.createElement('span');
  error.innerHTML = 'please fill out all these fields';

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

  function deleteBook(event) {
    const button = event.target;
    const instance = button.parentNode;
    instance.remove();
    const index = button.getAttribute('data-index');
    // bookHolder.splice(index, 1);
    bookHolder = bookHolder.filter((book, i) => i !== parseInt(index, 10));
    localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
  }

  //page navigation

  //access dom elements

  //tab buttons
  const listTab = document.querySelector('.list');
  const addingTab = document.querySelector('.adding');
  const contactTab = document.querySelector('.cont');

  //the h2 tag
  const titletext = document.querySelector('.titletext');

  //the contact page
  const contactpage = document.querySelector('.contact'); 

  //mssg for no books
  const bookarticles = document.querySelectorAll('.dercounter');
  const directive =document.createElement('span');
  directive.classList.add('directive');
  directive.textContent = 'No books have been added yet';
  bookDisplay.append(directive);

  function listOn(){
    //changing the h2
    titletext.textContent = 'All Awesome Books';
 
    //removing other sections
    bookDisplay.style.display = 'block';
    form.style.display = 'none';
    contactpage.style.display = 'none';

    //when no books have been added yet
    if(bookarticles.length>0){
      directive.style.display = 'none';
    }else {
      directive.style.display = 'block';
    }
 
     //changing the colors
     if(bookDisplay.style.display === 'block'){
      addingTab.style.color = 'black';
      listTab.style.color = 'blue';
      contactTab.style.color = 'black';
     }else {
      listTab.style.color = 'black';
     }
     return;
   }
   listTab.addEventListener('click',listOn);

  function addOn(){
    //changing the h2
    titletext.textContent = 'Add a New Book';
 
    //removing other sections
    bookDisplay.style.display = 'none';
    form.style.display = 'flex';
    contactpage.style.display = 'none';
 
 
     //changing the colors
     if(form.style.display === 'flex'){
      addingTab.style.color = 'blue';
      listTab.style.color = 'black';
      contactTab.style.color = 'black';
     }else {
      addingTab.style.color = 'black';
     }
     return;
   }

  addingTab.addEventListener('click',addOn);

  function contactOn(){
    //changing the h2
    titletext.textContent = 'Contact Information';
 
    //removing other sections
    bookDisplay.style.display = 'none';
    form.style.display = 'none';
    contactpage.style.display = 'block';
 
    //arrange elements
    const titlesection = document.querySelector('.Pagetitle');
    container.insertBefore(titlesection, contactpage);
 
     //changing the colors
     if(contactpage.style.display === 'block'){
      addingTab.style.color = 'black';
      listTab.style.color = 'black';
      contactTab.style.color = 'blue';
     }else {
      contactTab.style.color = 'black';
     }
     return;
   }
  
   contactTab.addEventListener('click',contactOn);

  //insert the time 
  function time() {
    const myDate = new Date();
    const year = myDate.getFullYear();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthindex = myDate.getMonth();
    const month = monthNames[monthindex];
    const day = myDate.getDate();
    let daySuffix;
  switch (day % 10) {
    case 1:
      daySuffix = 'st';
      break;
    case 2:
      daySuffix = 'nd';
      break;
    case 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
      break;
  }
    const formatteddays = day < 10 ? '0' + day : day;
    const dayadder = month + '-' + formatteddays + daySuffix + '-' + year;
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
    return dayadder + ' ' + formattedTime;
  }
  
  const datetime = document.querySelector('.datetime');
  datetime.textContent = time();
  

  //when the page loads
  window.addEventListener('load',listOn);

});