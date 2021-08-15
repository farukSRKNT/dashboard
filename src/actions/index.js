import axios from 'axios'

const API_KEY = '2d2d7142'

// category
export const changeCategoryInterval = (type) => {
  return { type }
}

// watch time
export const changeWatchTimeInterval = (type) => {
  return { type }
}

export const fetchMoviesSuccess = (searchResult) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: searchResult,
  }
}

// movie search
export const fetchMovies = (page, title, year) => {
  return (dispatch) => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&${
          title ? 's=' + title + '&' : ''
        }${year ? 'y=' + year + '&' : ''}type=movie&page=${page}`
      )
      .then((response) => {
        if (response.data && response.data.Response === 'True') {
          dispatch(fetchMoviesSuccess(response.data))
        } else {
          console.error('RESPONSE IS FALSE')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export const changeLastReviewedMovie = (movie) => {
  return {
    type: 'LAST_REVIEWED_MOVIE',
    payload: movie,
  }
}

export const increaseReviewedMovieCount = () => {
  return {
    type: 'INCREASE_REVIEWED_MOVIE',
  }
}
