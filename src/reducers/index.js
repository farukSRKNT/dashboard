import {categoryReducer, getCategoryMovieCount} from './Category'
import watchTimeReducer from './WatchTime'
import movieSearchReducer from './MovieSearchReducer'
import {combineReducers} from 'redux'
import { lastReviewedMovieReducer, increaseReviewedMovieCount } from './MovieHistoryReducer'

const allReducers = combineReducers({
    categories: categoryReducer,
    categoriesMovieCount: getCategoryMovieCount,
    watchTimes: watchTimeReducer,
    searchData: movieSearchReducer,
    reviewedMovieCount: increaseReviewedMovieCount,
    lastReviewedMovie: lastReviewedMovieReducer
})

export default allReducers