const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //Метод preventDefault () интерфейса Event сообщает User agent, что если событие
  //не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};
const form = document.querySelector("form");
const qty = document.querySelector("#qty");
const product = document.querySelector("#product");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //change your input in input.value to the id set in the html
  const productName = product.value;
  const qtyItem = qty.value;
  const li = document.createElement("LI");

  //this code: the second line will override the first line
  //li.innerText = product;
  //li.innerText = qty;
  //solution: join them
  li.innerText = qtyItem + " " + productName;
  list.appendChild(li);
  //add this line of code to empty the input after pressing submit
  product.value = "";
  qty.value = "";
});
