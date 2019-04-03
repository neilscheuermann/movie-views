import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDummyData, fetchPopularMoviesDesc } from '../store/popularMovies'
import { popularMoviesResults } from '../testMovieData'
import MovieInfo from './MovieInfo'
import Loading from './Loading'

class PopularMovies extends Component {
  componentDidMount = () => {
    const { pageNum } = this.props.match.params
    console.log(pageNum)
    this.props.fetchPopularMoviesDesc(pageNum)

    // // Fetches dummy data when there's no internet.
    // this.props.fetchDummyData(popularMoviesResults)
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
  fetchDummyData: popularMovies => dispatch(fetchDummyData(popularMovies)),
  fetchPopularMoviesDesc: pageNum => dispatch(fetchPopularMoviesDesc(pageNum)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies)
