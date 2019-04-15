import React from 'react'
import { withRouter } from 'react-router-dom'

const MovieSorter = props => {
  const movieCategory = React.createRef()
  const { sortBy } = props.match.params
  console.log('in drop down comp: ', sortBy)
  const selectDefaultValue =
    sortBy === 'popular'
      ? 'popularity'
      : sortBy === 'top-rated'
      ? 'vote-average'
      : 'release_date'

  const handleChange = () => {
    console.log(movieCategory.current.value)
  }

  return (
    <div>
      <h3>Sort By</h3>
      <select
        className="navbar-right-items"
        name="movies"
        defaultValue={selectDefaultValue}
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
