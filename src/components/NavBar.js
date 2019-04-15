import React from 'react'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  clickedHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <header className="navbar">
        <h1>MovieView</h1>
        <h2 className="navbar-right-items home-btn" onClick={this.clickedHome}>
          Home
        </h2>
      </header>
    )
  }
}

export default withRouter(NavBar)
