// add a click to the go button
// call the search function with whatever value is in the searchbox
window.onload = function() {
   var button = document.querySelector('.go');
   button.addEventListener("click", search);
}

function search(){

  var searchTerm = document.querySelector('.search').value;
  console.log(searchTerm);

  var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';

  axios.get(url).then(render);

  document.querySelector('.search').value = ""
}

//move the ajax call to its own function, called search
//should accept a search term as a parameter

	//grab the search term from the search text input

  //call the new search function with the term as a parameter
	 //hide the search box


//same as three...
var render = function(response){
  var data = response.data.data;

	//clear the wrapper
  var wrapper = document.querySelector('.wrapper')
  wrapper.innerHTML = "";
	//for every object in the response data array
		//  -create a new image tag
		//	-grab the fixed-height url
		// 	-set the img src to the url
		//	-append the img to the wrapper
  for(var item of data){
    var image = document.createElement('img');
    image.setAttribute('src', item.images.fixed_height.url);
    wrapper.appendChild(image);
  }
}
