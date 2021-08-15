const initialState = {
  movies: [],
  totalMovies: 0,
}

export const movieSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS':
      return {
        movies: action.payload.Search,
        totalMovies: action.payload.totalResults,
      }
    default:
      return state
  }
}

export default movieSearchReducer
