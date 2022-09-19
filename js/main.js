import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

let searchMovie = document.getElementById("search-movie");

searchMovie.addEventListener("click", () => {
  const id = Math.floor(Math.random() * 1000 + 1);

  const url = `${BASE_URL}${id}?api_key=${API_KEY}&${language}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

    movie.innerHTML = `
    
    <div class="poster-movie">
        <img src="${data.poster_path ? IMG_URL + data.poster_path : "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}"/>
    </div>

    <div class="description-movie">

        <h2>${
          data.title
            ? data.title
            : "<p>Ops, hoje não é dia de assistir filme.</br>Bora codar! 🚀</p>"
        }</h2>
        <p>${data.overview ? data.overview : ""}</p>
    </div>

    `;
    });

  
});
