const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation(); //The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed.
});
//Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.

// Для остановки всплытия нужно вызвать метод event.stopPropagation().
container.addEventListener("click", function () {
  container.classList.toggle("hide"); //The classList property returns the CSS classnames of an element.The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
  //   The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.
  //   Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

