import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { popularMoviesReducer } from './popularMovies'

const reducer = combineReducers({
  popularMovies: popularMoviesReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
