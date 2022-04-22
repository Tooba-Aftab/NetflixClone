const movies = document.getElementById("movies");
const singlemovie = document.getElementById("movie");
const modal = document.getElementById("movieModal");
const modalHeader = document.querySelector(".modal-header");
const modalBody = document.querySelector(".modal-body");
const modalLabel = document.createElement("h5");
const imgDiv = document.createElement("div");
const contentDiv = document.createElement("div");
const img = document.createElement("img");
var moviesList = null;

displayMoviesList();

function getMoviesList(element,index){
    return element.movies?.map(currentElement => {
        return `<div class="card-img col-md-2 mb-2 bg-dark">
        <img src="${currentElement.image}" data-toggle="modal" data-target="#movieModal" 
        onclick="viewDetails('${index}','${currentElement.id}')"/>
        </div>`;
    }).join("");
}

async function displayMoviesList() {
    moviesList = await getMovies();
    const displayMovies = moviesList?.map((currentElement,index) => {
        return `<h2>${currentElement.category}</h2>
    <div class="d-flex flex-row flex-wrap"> ${getMoviesList(currentElement,index)} </div>`;
    }).join("");

    movies.innerHTML = displayMovies;
}

function findid(id){
  return (item) => item.id == id
}

function viewDetails(index,id) {
   const movieDetails = (moviesList[index].movies.find(findid(id)));
   const { image,title, release_date, overview} = movieDetails;

    modal.innerHTML = `<div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary" id="exampleModalLabel">${title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center">
        <div class="card-img d-inline-block ">
            <img src="${image}">
        </div>
        <div class="text-primary d-inline-block flex-column align-content-stretch col-md-6 " style="height: 600px;">
          <h3 class="p-2 my-5">${title}</h3>
          <h5 class="p-2 my-5">Release Date: ${release_date}</h5>
          <p class="p-2 my-5">${overview}
          </p>
        </div>
      </div>
    </div>
  </div>`;
}

function closeModal() {
    modal.innerHTML = "";
}

page.addEventListener('click', function(event) {
    closeModal();
})