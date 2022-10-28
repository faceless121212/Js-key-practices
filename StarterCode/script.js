'use strict';
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal-window');
const btnShow = document.querySelectorAll('.show-modal-window');

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modalWindow.getElementsByClassName.display = 'block';
  });
  const addHiddenClass = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  btn.addEventListener('click', addHiddenClass);
  overlay.addEventListener('click', addHiddenClass);
}
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    console.log('Close model window');
  }
});
