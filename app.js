'use strict';

// Create a new list item
function newElement() {
  let li = document.createElement("li");
  let toDoItem = document.querySelector("#toDoItem").value;
  let t = document.createTextNode(toDoItem);
  li.appendChild(t);
  document.querySelector('#myUL').appendChild(li);

  document.querySelector("#toDoItem").value = "";

 
}
