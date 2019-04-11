import React from 'react'

const MovieSorter = () => {
  const movieCategory = React.createRef()

  const handleChange = () => {
    console.log(movieCategory.current.value)
  }

  return (
    <div>
      <h3>Sort By</h3>
      <select
        className="navbar-right-items"
        name="movies"
        defaultValue=""
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
export default MovieSorter
