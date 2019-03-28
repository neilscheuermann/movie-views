import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import PopularMovies from './PopularMovies'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/popular" component={PopularMovies} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
