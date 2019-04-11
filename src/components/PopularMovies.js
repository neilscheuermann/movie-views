import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchDummyData, fetchPopularMoviesDesc } from '../store/popularMovies'
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

    return (
      <div>
        {this.props.popularMovies ? (
          this.props.popularMovies.map(movie => {
            return <MovieInfo key={movie.id} movie={movie} />
          })
        ) : (
          <Loading />
        )}
        <Pagination
          pageNum={pageNum}
          fetchPopularMoviesDesc={this.props.fetchPopularMoviesDesc}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies.results,
})

const mapDispatchToProps = dispatch => ({
  fetchDummyData: popularMovies => dispatch(fetchDummyData(popularMovies)),
  fetchPopularMoviesDesc: pageNum => dispatch(fetchPopularMoviesDesc(pageNum)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PopularMovies)
)
