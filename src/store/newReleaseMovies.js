import axios from 'axios'
import { apiKey } from '../secrets'

// CONSTANTS
const GOT_NEW_RELEASE_MOVIES_DESCENDING = 'GOT_NEW_RELEASE_MOVIES_DESCENDING'

// ACTION CREATORS
const gotNewReleaseMoviesDesc = newReleaseMoviesData => ({
  type: GOT_NEW_RELEASE_MOVIES_DESCENDING,
  newReleaseMoviesData,
})

// THUNK CREATORS
export const fetchNewReleaseMoviesDesc = pageNum => {
  return dispatch => {
    axios({
      type: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNum}&sort_by=release_date.desc`,
    })
      .then(({ data }) => {
        dispatch(gotNewReleaseMoviesDesc(data))
      })
      .catch(error => console.error(error))
  }
}

// REDUCER
export const newReleaseMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_NEW_RELEASE_MOVIES_DESCENDING:
      return action.newReleaseMoviesData
    default:
      return state
  }
}
