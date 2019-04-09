import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import PopularMovies from './PopularMovies'

const Routes = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/popular/desc/:pageNum" component={PopularMovies} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  )
}

export default Routes
