import React from 'react'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  movieCategory = React.createRef()

  handleChange = () => {
    console.log(this.movieCategory.current.value)
  }

  clickedHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <header className="navbar">
        <h1>MovieView</h1>
        <div className="navbar-right">
          <select
            className="navbar-right-items"
            name="movies"
            defaultValue=""
            ref={this.movieCategory}
            onChange={this.handleChange}
          >
            <option disabled value="">
              Movie Categories
            </option>
            <option value="popularity">Popular</option>
            <option value="vote-average">Top Rated</option>
            <option value="release_date">New Releases</option>
          </select>
          <h2
            className="navbar-right-items home-btn"
            onClick={this.clickedHome}
          >
            Home
          </h2>
        </div>
      </header>
    )
  }
}

export default withRouter(NavBar)
