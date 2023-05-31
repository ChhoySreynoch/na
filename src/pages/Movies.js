import React, { useState } from 'react'

const fetchPopularMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&page=1")
    return res.json()
}

export default function Movies() {
 const [movies, setMovies] = useState()
  fetchPopularMovies()
  .then(res => setMovies(res))
  return (
    <main>
        { 
            movies && movies.results.map(movie => (
                <h1>{movie.title}</h1>
            ))
        }
    </main>
  )
}
