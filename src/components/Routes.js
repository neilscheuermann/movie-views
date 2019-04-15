import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import MoviesView from './MoviesView'

const Routes = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/movies/:sortBy/:pageNum" component={MoviesView} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  )
}

export default Routes
