const container = document.querySelector(".container");
const MovieTitle = document.querySelector(".UserInputTitle");
const MoviePosterUrl = document.querySelector(".UserInputPosterUrl");
const btn = document.querySelector(".button");
const MovieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlStored = localStorage.getItem("imageUrl");

console.log(titleInStorage);
console.log(imageUrlStored);

if(titleInStorage && imageUrlStored) {
    MovieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(156, 156, 198, 0.286), rgba(74, 47, 47, 0.752)),url('${imageUrlStored}')`;
}

btn.addEventListener("click", () => {
    let movieTitleInput = MovieTitle.value;
    let posterUrlInput = MoviePosterUrl.value;
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    MovieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(156, 156, 198, 0.286), rgba(74, 47, 47, 0.752)),
    url('${posterUrlInput}')`;
    MovieTitle.value = "";
    MoviePosterUrl.value = "";
});
