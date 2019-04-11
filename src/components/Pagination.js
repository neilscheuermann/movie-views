import React from 'react'
import PageNumbers from './PageNumbers'
import { withRouter } from 'react-router-dom'

const Pagination = props => {
  const { pageNum, fetchPopularMoviesDesc } = props

  const clickPrev = () => {
    props.history.push(`/popular/desc/${parseInt(pageNum) - 1}`)
    fetchPopularMoviesDesc(parseInt(pageNum) - 1)
  }

  const clickNext = () => {
    props.history.push(`/popular/desc/${parseInt(pageNum) + 1}`)
    fetchPopularMoviesDesc(parseInt(pageNum) + 1)
  }

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          className={
            pageNum <= 1 ? 'pagination-child-disabled' : 'pagination-child'
          }
          disabled={pageNum <= 1}
          onClick={clickPrev}
        >
          Previous
        </button>
        <PageNumbers
          pageNum={pageNum}
          fetchPopularMoviesDesc={fetchPopularMoviesDesc}
        />
        <button
          className={
            pageNum >= Infinity
              ? 'pagination-child-disabled'
              : 'pagination-child'
          }
          disabled={pageNum >= Infinity}
          onClick={clickNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default withRouter(Pagination)
