//once the page is loaded,
//hit the giphy api and get some json
window.onload = function(){
  var link = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';

  axios.get(link)
  .then(function(response){
    debugger;
  })


}
//using axios ajax get to request data from aan api
