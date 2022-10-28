//methods of manipualting
const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a"); //all in one elemnt

for (let link of links) {
  console.log(link.href);
}

// document.querySelector('h1') //tag
// document.querySelector('#red') //id
// document.querySelector('.big')  /class

//selecting by title
document.querySelector('a[title="Java"]'); //find a with title Jva
document.querySelectorAll("p a"); //a in p

//properties and methods
document.querySelector("p").innerText = "fewfe"; //all the text--with tags and dont apply //could be textContent //innerHtml --also ignor and apply  tags ;

//atributes
document.querySelector("#banner").id = "whoops"; //give new id,title
const firstLink = document.querySelector("a");
firstLink.getAttribute("href");
input.setAttribute("type", "text");
input.type;

//for each el
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const linkss = document.querySelectorAll("span"); //all in one elemnt

for (let d in linkss) {
  links[d].style.color = colors[d];
}

//CLASSLIST
const h2 = document.querySelector("h2");
h2.classList.add("purple");
h2.classList.remove("border");
h2.classList.contains("border"); //true or false
h2.classList.toggle("border"); //true or false

//parent element
const firstBold = document.querySelector("b");
firstBold.parentElement;
firstBold.children;
firstBold.nextSibling;
firstBold.append("sffse");
document.body.appendChild(newImg);

//The insertAdjacentElement() method of the Element
//  interface inserts a given element node at a given position relative to the element it is invoked upon.
// position
// A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
h2.insertAdjacentElement("afterend", h1);
h2.after(h1);

const div = document.querySelector("div");
for (let i = 0; i < 100; i++) {
  const button = document.createElement("button");
  button.innerHTML = "Hey!";
  div.appendChild(button);
}

//removing elements
const firstLi = document.querySelector("li");
const secondLi = firstLi.parentElement;
secondLi.removeChild(firstLi);
firstLi.remove();
