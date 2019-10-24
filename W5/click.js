//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here
//why is this needed??
window.onload = function() {
  var addbutton = document.querySelector('#add');
  addbutton.addEventListener('click', addItem)

  //grab all list items
var all = document.querySelectorAll('li');
  //add event listener to each one
  for(var todo of all){
    todo.addEventListener('click', function(){
        
        this.classList.add('done')
    })
  }
}

function addItem(){
  //get the value in the text input
  var textToAdd = document.querySelector('#newItem').value;


  //create a new list item, add the todo things
  var newtodo = document.createElement('li');
  newtodo.innerHTML = textToAdd;
  //add to my list
  document.querySelector('.todoList').append(newtodo);
}
