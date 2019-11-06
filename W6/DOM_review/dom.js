//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here
//why is this needed??
window.onload = function() {
	//add eventlisteners to the title, just for an example
	var title = document.getElementById('title');
	title.addEventListener('click', doSomething);

	for(var item of document.getElementsByClassName('todoItem')){
		item.addEventListener('click', markDone);
	}

	var addbtn = document.querySelector("#add"); //select the button
	addbtn.addEventListener("click", addItem);
}

var doSomething = function(){
	alert('hello');
}

var markDone = function(){
	this.classList.add('done');
}

function addItem() {
	//create a new li
	var newLi = document.createElement('li');
	newLi.innerHTML = document.querySelector('#newItem').value; 	//grabbing the text in the text box.
	document.querySelector(".todoList").append(newLi);
}
