import React, { Component } from 'react'
import MovieSortDropDown from './MovieSortDropDown'
import PopularMovies from './PopularMovies'

class MoviesView extends Component {
  render() {
    return (
      <div className="movies-view">
        <header>
          <h1>Movies</h1>
        </header>
        <MovieSortDropDown />
        <PopularMovies />
      </div>
    )
  }
}

export default MoviesView
