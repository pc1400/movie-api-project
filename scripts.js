let movieInput = document.getElementById("movieName")
let submitButton = document.getElementById("searchButton")

let title = document.getElementById("title")
let year = document.getElementById("year")
let rating = document.getElementById("rating")
let boxOffice = document.getElementById("boxOffice")
let poster = document.getElementById("poster")

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
      year.textContent = data.Released
      rating.textContent = data.Rated
      boxOffice.textContent = data.BoxOffice

      poster.src = data.Poster
    })

  movieInput.value = ""
})
