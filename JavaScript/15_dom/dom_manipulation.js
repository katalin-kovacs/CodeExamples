// Creating and Adding Elements
// To create a new element in JavaScript, you use
// the document.createElement() method. After creating an element,
// you can add it to the DOM using methods like appendChild(),
// prepend(), insertBefore(), and append().

// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add text to the paragraph
newParagraph.textContent = "This is a new paragraph created with JavaScript.";

// Select an existing element to append the new paragraph to
const container = document.getElementById("container");

// Add the new paragraph to the container
container.appendChild(newParagraph);

// Selecting Elements
// You can select elements in the DOM using various methods,
// including getElementById(), getElementsByClassName(),
// getElementsByTagName(), querySelector(), and querySelectorAll().

// Select an element by ID
const elementById = document.getElementById("header");

// Select elements by class name (returns a live HTMLCollection)
const elementsByClass = document.getElementsByClassName("list-item");

// Select elements by tag name (returns a live HTMLCollection)
const elementsByTag = document.getElementsByTagName("p");

// Select a single element using a CSS selector (returns the first match)
const elementBySelector = document.querySelector(".container p");

// Select multiple elements using a CSS selector (returns a NodeList)
const elementsBySelectorAll = document.querySelectorAll(".container p");

// Modifying Attributes
// You can use setAttribute(), getAttribute(), and removeAttribute()
// to manipulate an element’s attributes like class, id, src, href, etc.

// Modify the src attribute of an image
const image = document.getElementById("myImage");
image.setAttribute("src", "new-image.jpg");

// Get the href attribute of a link
const link = document.getElementById("myLink");
console.log(link.getAttribute("href"));

// Remove the title attribute of an element
link.removeAttribute("title");

// Modifying Styles
// You can manipulate the CSS styles of an element using the style property.
// Change the background color and font size of an element
const element = document.getElementById("box");
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
