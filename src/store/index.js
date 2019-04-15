import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { popularMoviesReducer } from './popularMovies'
import { topRatedMoviesReducer } from './topRatedMovies'

const reducer = combineReducers({
  popularMovies: popularMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
