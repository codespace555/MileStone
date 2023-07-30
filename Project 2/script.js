const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
const resultsDiv = document.getElementById("result");
const resultsDivre = document.getElementById("resultre");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    resultsDiv.innerHTML = "<p>Please enter a movie title.</p>";
    return;
  }

  const apiUrl = `https://www.omdbapi.com/?t=${searchTerm}&apikey=d43bca5a`;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayResults(data);
      } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultsDiv.innerHTML = "<p>Oops! Something went wrong.</p>";
    });
});

let output = [];
function displayResults(movie) {
  output.splice(
    0,
    0,
    `
      <div class = "film">
      <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <span>Year: ${movie.Year}</span><br>
        <span>Type: ${movie.Type}</span><br>
        <span>Rated: ${movie.Rated}</span><br>
        <span>Plot: ${movie.Plot}</span><br>
        
        <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Imdb_logo_rounded_corners.png/900px-Imdb_logo_rounded_corners.png" alt="${movie.imdbRating}"> ${movie.imdbRating}★</span> 
      </div>
    `
  );

  console.log(output);

  resultsDiv.innerHTML = `${output[0]}`;

  for (let i = 1; i < output.length; i++) {
    console.log(output);
    resultsDivre.innerHTML = ` ${output.join("")}`;
  }
}
