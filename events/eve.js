// const btn = document.querySelector("button");
// const link = document.querySelector("a");
// const container = document.querySelector(".container");
// // btn.addEventListener('click',function(e){

// // })
// // btn.addEventListener('click',e=>{

// // })
// // function clickHandler(e) {
// //   e.preventDefault();
// // }
// // link.addEventListener("click", clickHandler);
// // link.removeEventListener("click", clickHandler);

// btn.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   const nested = document.createElement("button");
//   div.textContent = Math.random();
//   div.appendChild(nested);
//   container.appendChild(div);
// });

const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");
btn.addEventListener("click", (e) => {
  e.stopPropagation(); //button active on btn
});

wrap.addEventListener("click", (e) => {});
