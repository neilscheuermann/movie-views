import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { popularMoviesReducer } from './popularMovies'
import { topRatedMoviesReducer } from './topRatedMovies'
import { newReleaseMoviesReducer } from './newReleaseMovies'

const reducer = combineReducers({
  popularMovies: popularMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  newReleaseMovies: newReleaseMoviesReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
