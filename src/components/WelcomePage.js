import React, { Component } from 'react'

class WelcomePage extends Component {
  popularMovies = () => {
    this.props.history.push('/popular/1')
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to MovieViews!</h1>
          <button onClick={this.popularMovies}>Browse Movies</button>
          <button onClick={this.popularMovies}>Browse TV Shows</button>
        </header>
      </div>
    )
  }
}

export default WelcomePage
