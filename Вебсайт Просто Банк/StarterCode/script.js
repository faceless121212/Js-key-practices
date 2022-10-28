'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const nav = document.querySelector('.nav');

const openModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalWindow.length; i++)
  btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// console.log(document.documentElement);
// const sections = document.querySelectorAll('.section');
// document.getElementsByTagName('button');

// //.insertAdjasmentHTML()
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent ="We using "
// message.innerHTML = `<button class ="btn btn--close-cookie">We are getting started</button>`;
// const header = document.querySelector('.header');
// header.append(message);
// header.before(message);

// //delete

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //styles

// message.style.backgroundColor = 'red';
// message.style.width = '100%';
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height); //real heaight of object
// message.style.height = Number.parseFloat(
//   getComputedStyle(message).height + 50 + 'px'
// );
// document.documentElement.style.setProperty('--color-first', 'yellow');

// //atributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.getAttribute('developer'));
// logo.setAttribute('copyright', 'masters of code');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); //отностьтельный
// console.log(link.getAttribute('href')); //fullway

// //data atributes

// console.log(logo.dataset.versionNumber);
// logo.classList.add('a');
// logo.classList.remove('a');
// logo.classList.toggle('a');
// logo.classList.contains('a');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  // console.log(
  //   'current position of x and y',
  //   window.pageXOffset,
  //   window.pageYOffset
  // ); //show us height from the first page
  // window.scrollTo({
  //   left: section1Coords.left + window.pageXOffset,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });  //1method
  section1.scrollIntoView({ behavior: 'smooth' }); //second meth
});

//events and eventlisteners

// const h1 = document.querySelector('h1');
// const mouseEnter = function (e) {
//   alert('addeventlistener: You are now at the h1 ');
// };
// h1.addEventListener('mouseenter', mouseEnter);
// setTimeout(() => h1.removeEventListener('mouseenter', mouseEnter), 5000);
// //u could delete event listener

//event propagation

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.ceil(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const getRandomColor = () =>
//   `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(
//     0,
//     255
//   )},${getRandomIntInclusive(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Link', e.target); //target with child elem e.currentTarget ==only elment ,this===e.currentTArget , give us element with current event listener
//   e.stopPropagation; //stop event listener on current element
// });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {});
// document.querySelector('.nav').addEventListener('click', function (e) {});
// document.querySelector('body').addEventListener('click', function (e) {});

// document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
//   htmlElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     console.log('Link was clicked ');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.contains('nav__link')) {
    const href = this.getAttribute('href');
    console.log('Link was clicked ');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');
// //to children
// h1.querySelectorAll('.highlight');
// h1.firstElementChild.style.color = 'yellow';

// //to parents

// console.log(h1.parentNode); //or parent elements h1.parentsElements
// const h2 = document.querySelector('h2');
// h2.closest('.section').style.backgroundColor = 'blue'; ///the nearest element to h2 that called section

// //moving

// console.log(h2.nextElementSibling); //next element to h2

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', function (e) {
  const clickedButton = e.target.closest('.operations__tab');
  //guard clause --place of security
  if (!clickedButton) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');

  tabContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  //active contebnt
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add('operations__content--active');
});

//animation with shades

nav.addEventListener('mouseover', function (e) {
  navlinksHover(e, 0.4);
});

nav.addEventListener('mouseout', function (e) {
  navlinksHover(e, 1);
});

const navlinksHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoText = linkOver.closest('.nav').querySelector('.nav__text');
    siblingLinks.forEach(el => {
      if (el !== linkOver) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
    logoText.style.opacity = opacity;
  }
};
//sticky navigation

// const section1Coords = section1.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (this.window.scrollY > section1Coords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//intersaction observation api
// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {});
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);
const getStickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const header = document.querySelector('.header');
const Observer = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
});
Observer.observe(header);

//shows parts of the site

const allSections = document.querySelectorAll('.section');
const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');
const loadImages = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  //with high quality
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
};
const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.1,
});
lazyImages.forEach(image => lazyImagesObserver.observe(image));

//creating of slider
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');

let currentSlide = 0;
const slidesNumber = slides.length;
// slider.style.overflow = 'visible';

slides.forEach(
  (slide, index) => (slide.style.transform = `translateX(${index * 100}%)`)
);

btnRight.addEventListener('click', function () {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
});

btnLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
});
