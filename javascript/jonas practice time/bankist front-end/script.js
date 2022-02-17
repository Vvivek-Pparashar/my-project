'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => {
  element.addEventListener("click", openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


// SMOOTH SCROLL AFTER CLICK ON LINK....
// HERE WE USE PARENT CLASS AND THEN WE BREAK IT INTO CHILD BY CLASS NAME.....
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});



//////////////////////////////////////////////////////////////////////////////
//  TABBED BUTTON....
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
let key = 0;

tabsContainer.addEventListener("click", function(e){
  const clickked = e.target.closest(".operations__tab");
  
  if(!clickked) return;

  // REMOVE THE CLASS FROM BTN AND CONTENT TO ADD NEW BTN AND  CONTENT.....
  tabs[key].classList.remove("operations__tab--active");
  tabContent[key].classList.remove("operations__content--active");

  // CHANGE THE KEY TO NEW DATA-TAB OF CLICKED BUTTON...
  key = clickked.getAttribute("data-tab") - 1; 

  // ADD THE ACTIVE CLASS TO UPDATED KEY....
  tabs[key].classList.add("operations__tab--active");
  tabContent[key].classList.add("operations__content--active");
});

/////////////////////////////////////////////////////////////////////////////

// SCROLL AND GET A STICKY NAVIGATION.....
const initial = document.querySelector("#section--1").getBoundingClientRect();

window.addEventListener("scroll", e =>{
  if( window.scrollY > initial.top)   document.querySelector(".nav").classList.add("sticky");
  else   document.querySelector(".nav").classList.remove("sticky");
});



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////