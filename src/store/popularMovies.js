// CONSTANTS
const GOT_POPULAR_MOVIES = 'GOT_POPULAR_MOVIES'

// ACTION CREATORS
export const fetchPopularMovies = popularMovies => ({
  type: GOT_POPULAR_MOVIES,
  popularMovies,
})

// THUNK CREATORS

// REDUCER
export const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_POPULAR_MOVIES:
      return action.popularMovies
    default:
      return state
  }
}
