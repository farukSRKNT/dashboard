import WatchTimeMock from '../mock/WatchTimeMock'

export const watchTimeReducer = (state = [], action) => {
  return WatchTimeMock[action.type] ? WatchTimeMock[action.type] : state
}

export default watchTimeReducer