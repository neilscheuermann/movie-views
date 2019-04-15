import React, { Component } from 'react'
import MovieSortDropDown from './MovieSortDropDown'
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies'
import NewReleaseMovies from './NewReleaseMovies'

class MoviesView extends Component {
  state = {
    sortBy: '',
  }

  componentDidMount() {
    const { sortBy } = this.props.match.params

    this.setState({
      sortBy,
    })
  }

  componentDidUpdate() {
    const stateSortBy = this.state.sortBy
    const urlSortBy = this.props.match.params.sortBy

    if (stateSortBy !== urlSortBy) {
      this.setState({
        sortBy: urlSortBy,
      })
    }
  }

  render() {
    const { sortBy } = this.state

    return (
      <div className="movies-view">
        <header>
          <h1>Movies</h1>
        </header>
        <MovieSortDropDown />

        {/* Determine which list of movies to show according to what the URL says. */}
        {sortBy === 'popularity' ? (
          <PopularMovies />
        ) : sortBy === 'vote-average' ? (
          <TopRatedMovies />
        ) : sortBy === 'release_date' ? (
          <NewReleaseMovies />
        ) : null}
      </div>
    )
  }
}

export default MoviesView
