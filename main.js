let arrayOfRecipes =[];
let subButt = document.querySelector('#submitButton');
subButt.addEventListener("click", searching);
let imagesArea= document.querySelector(".imagesArea");
let searchTermLocation = document.querySelector("#searchBox")



function searching(){
fetch(`http://recipepuppyproxy.herokuapp.com/api/?q=${searchTermLocation.value}`)
  .then(convertFromJson)
  .then(builtTheArray)
}
function convertFromJson(results){
  return results.json()
}
function  builtTheArray(data){
  imagesArea.innerHTML = "";
  arrayOfRecipes = data;
  console.log(arrayOfRecipes);
  for (var i = 0; i < arrayOfRecipes.results.length; i++) {
    if (arrayOfRecipes.results[i].thumbnail.length < 5) {
      arrayOfRecipes.results[i].thumbnail =  "http://via.placeholder.com/120x120";
    }
    imagesArea.innerHTML +=`
    <div class="recipe" id="recipe${i}">
    <a href="${arrayOfRecipes.results[i].href}"><h3>${arrayOfRecipes.results[i].title}</h3></a>
    <img src="${arrayOfRecipes.results[i].thumbnail}">
    <p>Made from:</p>
    <p>${arrayOfRecipes.results[i].ingredients}</p>
  </div>
    `
  }
}
