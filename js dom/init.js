//hirarchy tree //script can fluently speak with out elemnts //manipulation with html el
//document give us enter to   //console.log.dir ---show us an Object //docu,ent --point to enter dom  //document its not the js its just browser manipulation
//dom its part of web api that is libraries that application programming interface
const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
console.log(document.querySelector(".guess-message").textContent);
textContent = "Right";

//how to handle value when we click event listener (inerection with page )
//
//    console.log(div.parentElement);
const link = div.querySelector(".link");
console.log(link.closest("content")); //first parent element

div.classList.add("article", "custom");
console.log(div.classList);
div.classList.remove("article");
div.setAttribute("id", "myId");

//methods

const title = document.querySelector("h1");
title.innerHTML = "<span>text<span>"; //empty property text will be displayed
title.textContent = "new text"; //
//
title.insertAdjacentHTML("beforebegin", "<h2>title</h2>");
//Congratulations on completing our introduction to the Document Object Model, or DOM, as a structure!

// Let’s review what you’ve learned so far:

// The DOM is a structural model of a web page that allows for scripting languages to access that page.
// The system of organization in the DOM mimics the nesting structure of an HTML document.
// Elements nested within another are referred to as the children of that element. The element they are nested within is
//  called the parent element of those elements.
// The DOM also allows access to the attributes of an HTML element such as style, id, etc.

// For example, the .innerHTML property allows you to access and set the contents of an element.
document.body.innerHTML = "The cat loves the dog.";
// The .innerHTML property can also add any valid HTML elements. The following example replaces the contents of the
//  <body> element by assigning an <h2> element as a child inside the <body> element:
document.body.innerHTML = '<h2>This is a heading</h2>'; 
// The .querySelector() method allows us to specify a CSS selector as a string and returns the first element that matches that selector. 
document.querySelector('p');
// For example, if you want to access an element directly by its id, you can use the aptly named .getElementById() method:
document.getElementById('bio').innerHTML = 'The description';
// There are also the .getElementsByClassName() and .getElementsByTagName() methods which return an array of elements, 
// instead of just one element. 
// You can use bracket notation to access individual elements of an array:
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;
// The syntax follows an This includes the ability to modify the contents of the element as well 
// as its attributes and properties, which can range from modifying the text inside a element.style.property
//  format, with the For example, the property representing a CSS property. For example, the following code selects the 
// first element with a class of blue and assigns blue as the background-color:
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';
document.querySelector('.blue').style.fontFamily = 'Roboto';
{/* <ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul> */}
let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements
//working with the same variables 
const first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';


// The .createElement() method creates a new element based on the specified tag name passed
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
// The .appendChild() method does not replace the content inside of the parent, in this case, body. Rather,
//  it appends the new element as the last child of that parent.
let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';

document.getElementById('italy-attractions').appendChild(newAttraction);


// In addition to modifying or creating an element from scratch, the DOM also allows for
//  the removal of an element. The .removeChild() method removes a specified child from a parent.
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);
// n the above example code, the .querySelector() method 
// returns the first paragraph in the document. Then, the 
// paragraph element is passed as an argument of the .removeChild() 
// method chained to the parent of the paragraph—document.body. This removes the first paragraph from the document body.

// If you want to hide an element rather than completely
//  deleting it, the .hidden property allows you to hide it by setting the property as true or false
// The .onclick property allows you to assign a function to run on when a click event happens on an element:
let element = document.querySelector('button');
 
element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};
let element = document.querySelector('button');
 
function turnBlue() {
   element.style.backgroundColor = 'blue';
}
 
element.onclick = turnBlue;
// The document keyword grants access to the root of the DOM in JavaScript.
// The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method.
// You can access an element directly by its ID with the .getElementById() method which returns a single element.
// You can access an array of elements with the .getElementsByClassName() and .getElementsByTagName() methods, 
// then call a single element by referencing its placement in the array.
// The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively.
// You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively.
// The .onclick property can add interactivity to a DOM element based on a click event.
// The .children property returns a list of an element’s children and the .parentNode property returns the 
// element’s closest connected node in the direction towards the root.



// When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something cool happens in your browser. These actions are known as events!

// Events on the web are user interactions and browser manipulations that you can program to trigger functionality. Some other examples of events are:

// A mouse clicking on a button
// Webpage files loading in the browser
// A user swiping right on an image
// When a user does any of the above actions, they’re causing the event to be fired or be triggered. As in, “a click event fired when the button was clicked”.
//  Being able to respond to these events makes your website interactive and therefore dynamic.


// After a specific event fires on a specific element in the When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something cool happens in your browser. These actions are known as document object model (or DOM), an event handler function can be created to run as a response. In this lesson, we will learn about event handler functions that modify and update DOM elements after an event fires.

// Let’s compare the firing of events to something more familiar: a dog trained to eat when they hear the sound of a bell! (This is known as the Pavlovian conditioning.)

// As you can see in the diagram, the ringing of the bell is analogous to a JavaScript event firing. The dog is trained to anticipate the ringing of the bell and this action is analogous to creating an event listener. After the dog hears the bell, it’ll come over and eat its food! This response is like an event handler function that executes code which, in a website, could change an element’s color, text, and much more!”

// Most events in the browser take place without being noticed — the events are undetected because there is no event
//  handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.
//  Using the .addEventListener() method, we can have a DOM element
//   listen for a specific event and execute a block of code when the event
//    is detected. The DOM element that listens for an event is called the
//     event target and the block of code that runs when the event happens is called the event handler.
let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});
// Let’s break this down!

// We selected our event target from the DOM using document.getElementById('targetElement').
// We used the .addEventListener() method on the eventTarget DOM element.
// The .addEventListener() method takes two arguments: an event name in string format and an event handler function.
//  We will learn about different values we can use as event names in a later lesson.
// In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
// The code block in the event handler function will execute when the 'click' event is detected.
// Instead of using an anonymous function as the event handler,
//  it’s best practice to create a named event handler function. Your code will remain organized 
//  and reusable this way, even if your code gets complex. Check out the syntax:
function eventHandlerFunction() {
    // this block of code will run when click event happens
  }
   
  eventTarget.addEventListener('click', eventHandlerFunction);

//   Adding Event Handlers
// We looked at registering event handlers using the .addEventListener() method, but there is also another way!

// Event Handlers can also be registered by setting an Using the .onevent property on a DOM element (event target). The pattern for registering a specific event is to append an element with The DOM element that listens for an event is called the .on 
// followed by the lowercased event type name. For instance, if we
//  want to register a click event with this pattern, we would write:
eventTarget.onclick = eventHandlerFunction;
// Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler function eventHandlerFunction.

// It’s important to know that this .onevent property and .addEventListener() will 
// both register event listeners. With .onevent, it allows for one event handler function to be
//  attached to the event target. However, with the .addEventListener() method , we can add multiple
//   event handler functions. In the later exercises, we’ll be using the 
// .addEventListener() syntax, but we wanted to also introduce the .onevent syntax because both are widely used.
// The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the event target from “listening” for an event to fire when it no longer needs to. .removeEventListener() also takes two arguments:

// The event type as a string
// The event handler function
// Check out the syntax of a .removeEventListener() method with a click event:

eventTarget.removeEventListener('click', eventHandlerFunction);

function eventHandlerFunction(event){
    console.log(event.timeStamp);
 }
  
 eventTarget.addEventListener('click', eventHandlerFunction);
// //  In the example above, when the 'click' event is triggered on the eventTarget,
//  the eventHandlerFunction receives event, the Event object, which has information
//  related to the 'click' event. Then, we log the time it took for the event to be 
//  triggered since the document was loaded by accessing the .timeStamp property of the event object.
// // There are pre-determined properties associated with event objects. You can call these properties 
// to see information about the event, for example:
// // the .target property to reference the element that the event is registered to.
// // the .type property to access the name of the event.
// // the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
// // Beyond the The click event, there are all types of DOM events that can fire in a browser! It’s
//  important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.

// // It’s also important to know some registered events don’t depend on user interactions to fire. For

// // Browsers can fire many other events without a user — you can check out a list of events on the In the 
// example above, when the MDN Events Reference page.
// // Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar
// with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.