//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here
//why is this needed??
window.onload = function() {
  // selecting an element
  var user = prompt('What is your name?');
  var headline = document.querySelector("h1");
  //manipulating that element.
  headline.innerHTML = user + "'s Wednesday List";

  //select all the list items
  var list = document.querySelectorAll('li'); //select all li s, this is an array
  //loop through that List
  for(var item of list){ // for of is for arrays,
    //mark all as done.
    item.classList.add('done');
  }



  //creat a new element
  var newItem = document.createElement('li'); //creates a list item
  newItem.innerHTML = "Take a bath";
  newItem.classList.add("todoItem", "current");
  //add it to the document
  document.querySelector(".todoList").append(newItem);

  //create many more
  var newThings = ["eat", "skip", "be merry", "new things"];

  for(var t of newThings){
    var newItem = document.createElement('li')
    newItem.innerHTML = t;
    newItem.classList.add("todoItem");
    document.querySelector(".todoList").append(newItem);
  }
}
