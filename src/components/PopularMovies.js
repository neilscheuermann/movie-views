import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPopularMovies } from '../store/popularMovies'
import { popularMoviesResults } from '../testMovieData'
import MovieInfo from './MovieInfo'
import Loading from './Loading'

class PopularMovies extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies(popularMoviesResults)
  }

  render() {
    return (
      <div>
        <header>
          <h1>Popular Movies!</h1>
        </header>
        {this.props.popularMovies.length ? (
          this.props.popularMovies.map(movie => {
            return <MovieInfo key={movie.id} movie={movie} />
          })
        ) : (
          <Loading />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
})

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: popularMovies =>
    dispatch(fetchPopularMovies(popularMovies)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies)
