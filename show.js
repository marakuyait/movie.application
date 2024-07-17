export async function showMovieDetails(movieId) {
  const url = "https://solar-poised-salad.glitch.me/karine";
  try {
    const response = await fetch(`${url}/${movieId}`);
    const movie = await response.json();

    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = `
        <div class="movie-detail">
          <img src="${movie.image}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p>${movie.description}</p>
          <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
          <p><strong>Rating:</strong> ${movie.rating}</p>
          <p><strong>Duration:</strong> ${movie.duration}</p>
          <iframe width="560" height="315" src="${movie.trailerLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <button type="submit" id="iamButton"><a href="/index.html">Back</a></button>
        </div>
      `;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}
