import axios from 'axios'
import { apiKey } from '../secrets'

// CONSTANTS
const GOT_POPULAR_MOVIES_DESCENDING = 'GOT_POPULAR_MOVIES_DESCENDING'

// ACTION CREATORS
const gotPopularMoviesDesc = popularMoviesData => ({
  type: GOT_POPULAR_MOVIES_DESCENDING,
  popularMoviesData,
})

// THUNK CREATORS
export const fetchPopularMoviesDesc = pageNum => {
  return dispatch => {
    axios({
      type: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}&sort_by=popularity.desc`,
    })
      .then(({ data }) => {
        dispatch(gotPopularMoviesDesc(data))
      })
      .catch(error => console.error(error))
  }
}

// REDUCER
export const popularMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_POPULAR_MOVIES_DESCENDING:
      return action.popularMoviesData
    default:
      return state
  }
}
