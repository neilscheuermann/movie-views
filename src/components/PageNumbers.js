import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const PageNumbers = props => {
  const { sortBy } = props.match.params
  const pageNum = Number(props.pageNum)
  const startNum = pageNum <= 5 ? 1 : pageNum - 4
  const tempArr = new Array(10).fill('')

  const fetchMovies = event => {
    props.fetchMovieData(parseInt(event.target.textContent))
  }

  return tempArr.map((elem, idx) => {
    return (
      <Link
        className={
          startNum + idx === pageNum
            ? 'pagination-child-selected'
            : 'pagination-child'
        }
        key={idx}
        to={`/movies/${sortBy}/${startNum + idx}`}
        onClick={fetchMovies}
      >
        <div> {startNum + idx} </div>
      </Link>
    )
  })
}

export default withRouter(PageNumbers)
