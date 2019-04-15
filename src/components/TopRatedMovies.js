import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchTopRatedMoviesDesc } from '../store/topRatedMovies'
import { numberWithCommas } from '../helpers'
import MovieInfo from './MovieInfo'
import Loading from './Loading'
import Pagination from './Pagination'

class TopRatedMovies extends Component {
  componentDidMount = () => {
    const { pageNum } = this.props.match.params
    this.props.fetchTopRatedMoviesDesc(pageNum)
  }

  render() {
    const { pageNum } = this.props.match.params
    const { topRatedMovies, totalResults } = this.props
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
        {topRatedMovies ? (
          topRatedMovies.map(movie => {
            return <MovieInfo key={movie.id} movie={movie} />
          })
        ) : (
          <Loading />
        )}
        <Pagination
          pageNum={pageNum}
          fetchMovieData={this.props.fetchTopRatedMoviesDesc}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topRatedMovies: state.topRatedMovies.results,
  totalResults: state.topRatedMovies.total_results,
})

const mapDispatchToProps = dispatch => ({
  fetchTopRatedMoviesDesc: pageNum =>
    dispatch(fetchTopRatedMoviesDesc(pageNum)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopRatedMovies)
)
