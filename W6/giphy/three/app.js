//Same as Two to start
window.onload = function() {

  var url = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';

  axios.get(url).then(render);
}

var render = function(response) {
  //build the elements to the dom
  //Grab the wrapper div
   var wrapper = document.querySelector('.wrapper');
   var data = response.data.data
  //with a for loop
  //for every object in the response data array
  for(var item of data){
    var image = document.createElement('img');
    image.setAttribute('src', item.images.fixed_height.url)
    wrapper.append(image);
  }
  //  -create a new image tag
  //	-grab the fixed-height url //go to one.html look at the json
  // 	-set the img src to the url
  //	-append the img to the wrapper

}
