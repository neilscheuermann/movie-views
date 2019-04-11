import React from 'react'
import { Link } from 'react-router-dom'

const PageNumbers = props => {
  const pageNum = Number(props.pageNum)
  const startNum = pageNum <= 5 ? 1 : pageNum - 4
  const tempArr = new Array(10).fill('')

  const fetchMovies = event => {
    props.fetchPopularMoviesDesc(parseInt(event.target.textContent))
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
        to={`/popular/${startNum + idx}`}
        onClick={fetchMovies}
      >
        <div> {startNum + idx} </div>
      </Link>
    )
  })
}

export default PageNumbers
