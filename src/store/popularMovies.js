import axios from 'axios'
import { apiKey } from '../secrets'

// CONSTANTS
const GOT_DUMMY_DATA = 'GOT_DUMMY_DATA'
const GOT_POPULAR_MOVIES_DESCENDING = 'GOT_POPULAR_MOVIES_DESCENDING'

// ACTION CREATORS
export const fetchDummyData = popularMovies => ({
  type: GOT_DUMMY_DATA,
  popularMovies,
})
const gotPopularMoviesDesc = popularMovies => ({
  type: GOT_POPULAR_MOVIES_DESCENDING,
  popularMovies,
})

// THUNK CREATORS
export const fetchPopularMoviesDesc = pageNum => {
  return dispatch => {
    axios({
      type: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}&sort_by=popularity.desc`,
    })
      .then(({ data }) => {
        console.log(data)
        dispatch(gotPopularMoviesDesc(data.results))
      })
      .catch(error => console.error(error))
  }
}

// REDUCER
export const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_DUMMY_DATA:
      return action.popularMovies
    case GOT_POPULAR_MOVIES_DESCENDING:
      return action.popularMovies
    default:
      return state
  }
}
