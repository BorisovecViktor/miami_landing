'use strict';

const list = document.querySelector('.nav__list');
const link = document.querySelectorAll('.nav__link');
const navCheckbox = document.querySelector('.header__toggle-button');
const galleryBtn = document.querySelector('.gallery__button');
const galleryItem = document.querySelectorAll('.gallery__item');
const formContact = document.querySelector('.contact__form');
const formConsultation = document.querySelector('.consultation__form');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');
const overlay = document.querySelector('.overlay');

list.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'A') {
    link.forEach(item => {
      item.classList.remove('nav__link--active');
    });
    target.classList.add('nav__link--active');
    navCheckbox.checked = false;
  }
});

galleryBtn.addEventListener('click', (e) => {
  const target = e.target;

  target.classList.add('gallery__button--hide');

  galleryItem.forEach(item => {
    item.classList.remove('gallery__item--hide');
  });
});

formContact.addEventListener('submit', (e) => {
  e.preventDefault();
  formContact.reset();
  modal.classList.add('modal--active');
  overlay.classList.add('overlay--active');
});

formConsultation.addEventListener('submit', (e) => {
  e.preventDefault();
  formConsultation.reset();
  modal.classList.add('modal--active');
  overlay.classList.add('overlay--active');
});

modalButton.addEventListener('click', () => {
  modal.classList.remove('modal--active');
  overlay.classList.remove('overlay--active');
});
