import React, { Component } from 'react'

class WelcomePage extends Component {
  popularMovies = () => {
    this.props.history.push('movies/popularity/1')
  }

  popularTVShows = () => {
    console.log('still need to set up the TV show side.')
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to MovieViews!</h1>
          <button onClick={this.popularMovies}>Browse Movies</button>
          <button onClick={this.popularTVShows}>Browse TV Shows</button>
        </header>
      </div>
    )
  }
}

export default WelcomePage
