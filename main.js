import { movies } from "./data.js";
import { showMovieDetails } from "./show.js";

const url = "https://solar-poised-salad.glitch.me/karine";

async function deleteAllMovies() {
  try {
    await fetch(url, {
      method: "DELETE",
    });
    console.log("all movies deleted");
  } catch (error) {
    console.error("Error deleting movies", error);
  }
}

async function addMovies() {
  const addedMovies = [];
  try {
    for (const movie of movies) {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      });
      const addedMovie = await response.json();
      addedMovies.push(addedMovie);
    }
    console.log("All movies added!");
    displayMovies(addedMovies);
  } catch (error) {
    console.error("Error adding movies", error);
  }
}

function displayMovies(moviesToDisplay) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  moviesToDisplay.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img src= "${movie.image}" alt= "${movie.title}" width="300px"/>
    <h2><a href="#movies-container" onclick="showMovieDetails(${movie.id})">${movie.title}</a></h2>
    <p>${movie.description}</p>
    <p><strong>Release Date:</strong>${movie.releaseDate}</p>
    <p><strong>Rating:</strong>${movie.rating}</p>
    <p><strong>Duration:</strong>${movie.duration}</p>
    `;
    moviesContainer.appendChild(movieElement);
  });
}

async function initializeMovies() {
  await deleteAllMovies();
  await addMovies();
}
initializeMovies();
window.showMovieDetails = showMovieDetails;
