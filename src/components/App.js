import React, { Component } from 'react'
import NavBar from './NavBar'
import Routes from './Routes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
