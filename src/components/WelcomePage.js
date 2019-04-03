import React, { Component } from 'react'

class WelcomePage extends Component {
  popularMovies = () => {
    this.props.history.push('/popular/desc/1')
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to MovieViews!</h1>
          <button onClick={this.popularMovies}>Popular Movies</button>
        </header>
      </div>
    )
  }
}

export default WelcomePage
