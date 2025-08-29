Emergency Service Directory
This project is a simple static website built with HTML, CSS, and Vanilla JavaScript. It provides a directory of emergency service hotlines.

Functionalities
Card Display: Shows 9 hotline cards in a responsive grid.

Live Counts: Tracks and displays heart, coin, and copy counts.

Call Functionality: Reduces coins for each call and adds a record to the call history with the exact time.

Copy Functionality: Copies the hotline number to the clipboard and increases the copy count.

Call History: A dynamic section that logs every call made.

Clear History: A button to clear all records from the call history.

Answer the following questions clearly:
What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?

These are all ways to find elements on a webpage using JavaScript.

getElementById is the fastest method. It finds a single element by its unique id and returns that one element.

getElementsByClassName finds all elements that share a specific class name. It returns a "live" collection, meaning if you add or remove elements with that class later, the collection automatically updates.

querySelector and querySelectorAll are the most flexible. They can find elements using any CSS selector (like class names, IDs, or element types). querySelector returns only the first matching element, while querySelectorAll returns a "static" list of all matches.

How do you create and insert a new element into the DOM?

You can create a new element by using document.createElement(). Then, you can add content to it using .textContent or innerHTML. Finally, you insert it into the webpage (the DOM) by finding a parent element and using a method like appendChild() or insertBefore(). For example:

// Create a new div element
const newDiv = document.createElement('div');

// Give it some text content
newDiv.textContent = 'Hello, I am a new element!';

// Find a parent element to add it to
const parent = document.getElementById('myParent');

// Add the new div to the end of the parent element
parent.appendChild(newDiv);

What is Event Bubbling and how does it work?

Event bubbling is how events, like a click, move through the webpage. When you click on an element, the event first happens on that specific element. Then, it "bubbles up" to its parent element, then its grandparent, and so on, all the way up to the <body> and <html> tags. This happens by default. This process allows parent elements to "hear" events that happen on their children.

What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique that uses event bubbling. Instead of adding a separate event listener to every single element, you add just one listener to a common parent element. When a click (or any other event) happens on a child, it bubbles up to the parent, and the parent's single listener handles it.

This is very useful because it:

Improves performance: You only have one event listener, which saves memory and processing power.

Works with dynamic content: It automatically works for any new elements you add to the page. You don't have to write new code to attach a listener to each new element.

What is the difference between preventDefault() and stopPropagation() methods?

Both are used to control how events behave, but they do different things.

event.preventDefault(): This stops the browser's default action for an event. For example, if you click a link that has an <a> tag, preventDefault() will stop the browser from navigating to the new page.

event.stopPropagation(): This stops the event from bubbling up the DOM tree. If you click an element and call stopPropagation(), the event will not be heard by any of its parent elements. It prevents the event from "travelling."
