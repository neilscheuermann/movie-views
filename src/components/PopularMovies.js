import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPopularMoviesDesc } from '../store/popularMovies'
import { numberWithCommas } from '../helpers'
import MovieInfo from './MovieInfo'
import Loading from './Loading'
import Pagination from './Pagination'

class PopularMovies extends Component {
  componentDidMount = () => {
    const { pageNum } = this.props.match.params
    this.props.fetchPopularMoviesDesc(pageNum)
  }

  render() {
    const { pageNum } = this.props.match.params
    const { popularMovies, totalResults } = this.props
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
        {popularMovies ? (
          popularMovies.map(movie => {
            return <MovieInfo key={movie.id} movie={movie} />
          })
        ) : (
          <Loading />
        )}
        <Pagination
          pageNum={pageNum}
          fetchMovieData={this.props.fetchPopularMoviesDesc}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies.results,
  totalResults: state.popularMovies.total_results,
})

const mapDispatchToProps = dispatch => ({
  fetchPopularMoviesDesc: pageNum => dispatch(fetchPopularMoviesDesc(pageNum)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PopularMovies)
)
