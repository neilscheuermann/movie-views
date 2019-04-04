import React from 'react'

class NavBar extends React.Component {
  movieCategory = React.createRef()

  handleChange = () => {
    console.log(this.movieCategory.current.value)
  }

  render() {
    return (
      <header className="navbar">
        <h1>MovieView</h1>
        <select
          name="movies"
          defaultValue=""
          ref={this.movieCategory}
          onChange={() => this.handleChange()}
        >
          <option disabled value="">
            Movie Categories
          </option>
          <option value="popularity">Popular</option>
          <option value="vote-average">Top Rated</option>
          <option value="release_date">New Releases</option>
        </select>
      </header>
    )
  }
}

export default NavBar
