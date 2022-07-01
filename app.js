'use strict';

// Create a new list item
function newElement() {
  let li = document.createElement("li");
  let toDoItem = document.getElementById("toDoItem").value;
  let t = document.createTextNode(toDoItem);
  li.appendChild(t);
  document.getElementById('myUL').appendChild(li);

  document.getElementById("toDoItem").value = "";

 
}
