const btn = document.querySelector("button");
const link = document.querySelector("a");

// btn.onclick = function () {
//   //cant give a lot of event handlers on btn
//   console.log("click");
// };
// btn.addEventListener("click", function (e) { //event //prevent default --forms have special ,reject default action
//   console.log(e);
// });
link.addEventListener("click", function (e) {
  e.preventDefault(); //when we click now without reload of the page
  console.log("click");
});
function clickhandler(e) {
  e.preventDefault();
  console.log("click");
}
//
btn.addEventListener("click", (e) => {
  console.log(this); //give us element in which have this
  console.log(e);
});
const container = document.querySelector(".container");
btn.addEventListener("click", function (e) {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("Button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});
btn.addEventListener("click", function (e) {
  console.log(e.target) //таргет именно тот элемен на который клик 
}
// // btn.addEventListener('click', e => {
// //   console.log(this);
// //   console.log(e);
// // });

// // function clickhandler(e) {
// //   e.preventDefault();
// //   console.log(this);
// //   console.log('click');
// // }

// // link.addEventListener('click', clickhandler);

// // link.removeEventListener('click', clickhandler);

// const container = document.querySelector('.container');

// btn.addEventListener('click', e => {
//   const div = document.createElement('div');
//   const nestedBtn = document.createElement('button');
//   div.textContent = Math.random();
//   nestedBtn.textContent = 'button';
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// container.addEventListener('click', e => {
//   console.dir(e.target);
//   if (e.target.tagName === 'BUTTON') {
//     console.log('button clicked');
//   }
// });
