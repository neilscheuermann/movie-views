import axios from 'axios'
import { apiKey } from '../secrets'

// CONSTANTS
const GOT_TOP_RATED_MOVIES_DESCENDING = 'GOT_TOP_RATED_MOVIES_DESCENDING'

// ACTION CREATORS
const gotTopRatedMoviesDesc = topRatedMoviesData => ({
  type: GOT_TOP_RATED_MOVIES_DESCENDING,
  topRatedMoviesData,
})

// THUNK CREATORS
export const fetchTopRatedMoviesDesc = pageNum => {
  return dispatch => {
    axios({
      type: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}&sort_by=vote-average.desc`,
    })
      .then(({ data }) => {
        dispatch(gotTopRatedMoviesDesc(data))
      })
      .catch(error => console.error(error))
  }
}

// REDUCER
export const topRatedMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_TOP_RATED_MOVIES_DESCENDING:
      return action.topRatedMoviesData
    default:
      return state
  }
}
