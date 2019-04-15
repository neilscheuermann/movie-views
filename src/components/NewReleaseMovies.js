import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchNewReleaseMoviesDesc } from '../store/newReleaseMovies'
import { numberWithCommas } from '../helpers'
import MovieInfo from './MovieInfo'
import Loading from './Loading'
import Pagination from './Pagination'

class NewReleaseMovies extends Component {
  componentDidMount = () => {
    const { pageNum } = this.props.match.params
    this.props.fetchNewReleaseMoviesDesc(pageNum)
  }

  render() {
    const { pageNum } = this.props.match.params
    const { newReleaseMovies, totalResults } = this.props
    let formattedTotalResults

    if (totalResults) {
      formattedTotalResults = numberWithCommas(totalResults)
    }

    return (
      <div>
        <p>
          Showing {pageNum * 20 - 19}-{pageNum * 20} of {formattedTotalResults}{' '}
          results
        </p>
        {newReleaseMovies ? (
          newReleaseMovies.map(movie => {
            return <MovieInfo key={movie.id} movie={movie} />
          })
        ) : (
          <Loading />
        )}
        <Pagination
          pageNum={pageNum}
          fetchMovieData={this.props.fetchNewReleaseMoviesDesc}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newReleaseMovies: state.newReleaseMovies.results,
  totalResults: state.newReleaseMovies.total_results,
})

const mapDispatchToProps = dispatch => ({
  fetchNewReleaseMoviesDesc: pageNum =>
    dispatch(fetchNewReleaseMoviesDesc(pageNum)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewReleaseMovies)
)
