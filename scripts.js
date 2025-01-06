let movieInput = document.getElementById("movieName")
let submitButton = document.getElementById("searchButton")
let moreInfoButton = document.getElementById("moreInfo")

let title = document.getElementById("title")
let releaseDate = document.getElementById("releaseDate")
let rating = document.getElementById("rating")
let boxOffice = document.getElementById("boxOffice")
let poster = document.getElementById("poster")

let extraContent = document.getElementById("extraContent")

let runtime = document.getElementById("runtime")
let actors = document.getElementById("actors")
let awards = document.getElementById("awards")
let director = document.getElementById("director")
let genre = document.getElementById("genre")
let language = document.getElementById("language")
let metascore = document.getElementById("metascore")
let plot = document.getElementById("plot")
let imdbRating = document.getElementById("imdbRating")
let imdbVotes = document.getElementById("imdbVotes")

let moreInfoShown = false

submitButton.addEventListener("click", (event) => {
  event.preventDefault()

  let inputName = movieInput.value

  let movieName = ""

  let movieParts = inputName.split(" ")

  for (var i = 0; i < movieParts.length; i++) {
    movieName += movieParts[i]

    if (i != movieParts.length - 1) {
      movieName += "+"
    }
  }

  let url = `http://www.omdbapi.com/?apikey=2a229975&t=${movieName}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      title.textContent = data.Title
      releaseDate.textContent = data.Released
      rating.textContent = data.Rated
      boxOffice.textContent = data.BoxOffice
      poster.src = data.Poster

      runtime.textContent = data.Runtime
      actors.textContent = data.Actors
      awards.textContent = data.Awards
      director.textContent = data.Director
      genre.textContent = data.Genre
      language.textContent = data.Language
      metascore.textContent = data.Metascore
      plot.textContent = data.Plot
      imdbRating.textContent = data.imdbRating
      imdbVotes.textContent = data.imdbVotes
    })

  movieInput.value = ""
})

moreInfoButton.addEventListener("click", (event) => {
  event.preventDefault()
  if (!moreInfoShown) {
    extraContent.style.display = "block"
    moreInfoShown = true
    moreInfoButton.textContent = "Hide"
  } else {
    extraContent.style.display = "none"
    moreInfoShown = false
    moreInfoButton.textContent = "More Info"
  }
})
