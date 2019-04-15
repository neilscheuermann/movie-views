import React from 'react'
import { withRouter } from 'react-router-dom'

const MovieSorter = props => {
  const movieCategory = React.createRef()
  const { sortBy } = props.match.params

  const handleChange = () => {
    const sortByVal = movieCategory.current.value

    props.history.push(`/movies/${sortByVal}/1`)
  }

  return (
    <div>
      <h3>Sort By</h3>
      <select
        className="navbar-right-items"
        name="movies"
        defaultValue={sortBy}
        ref={movieCategory}
        onChange={handleChange}
      >
        <option value="popularity">Popular</option>
        <option value="vote-average">Top Rated</option>
        <option value="release_date">New Releases</option>
      </select>
    </div>
  )
}
export default withRouter(MovieSorter)
