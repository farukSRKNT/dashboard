export const lastReviewedMovieReducer = (state = '', action) => {
  if (action.type === 'LAST_REVIEWED_MOVIE') {
    return action.payload
  }

  return state
}

export const increaseReviewedMovieCount = (state = 0, action) => {
  if (action.type === 'INCREASE_REVIEWED_MOVIE') {
    return state + 1
  }
  return state
}
