import CategoryMock from '../mock/CategoryMock'

export const categoryReducer = (state = [], action) => {
  return CategoryMock[action.type] ? CategoryMock[action.type] : state
}

export const getCategoryMovieCount = (state = 0, action) => {
  if (['WEEK', 'MONTH', 'YEAR'].includes(action.type)) {
    return CategoryMock[action.type]
      .map((item) => item.value)
      .reduce((prev, next) => prev + next)
  }

  return state
}
