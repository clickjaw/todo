'use strict';
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item
function newElement() {
  let li = document.createElement("li");
  let toDoItem = document.getElementById("toDoItem").value;
  let t = document.createTextNode(toDoItem);
  li.appendChild(t);
  document.getElementById('myUL').appendChild(li);

  document.getElementById("toDoItem").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
