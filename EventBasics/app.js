const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked mec ");
  console.log("I hope it work");
};
function scream() {
  console.log("You clicked mec ");
  console.log("I hope it work");
}
btn.onmouseenter = scream;
document.querySelector("h1").onclick = () => {
  alert("you clicked the h1");
};
const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("clicked");
});

// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!")
// }

// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("CLICKED!");
// })

function twist() {
  console.log("TWIST!");
}
function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist, { once: true }); //onlu once
tasButton.addEventListener("click", shout);

const button = document.querySelector("button");
button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const m = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r},${b},${g})`;
  document.body.style.backgroundColor = newColor;
});
// //The mousedown event is fired when the user presses a mouse
//  down. This is different from a click event because mousedown doesn’t need the mouse button to be released to fire.

//The mouseover event is fired when the mouse enters the content of an element.
