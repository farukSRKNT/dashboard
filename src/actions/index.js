import axios from 'axios'

const API_KEY = '2d2d7142'
// category 
export const changeCategoryInterval = (type) => {
    debugger
    return {type}
}

// watch time
export const changeWatchTimeInterval = (type) => {
    return {type}
}

export const fetchMoviesSuccess = (searchResult) => {
    return {
        type: 'FETCH_MOVIE_SUCCESS',
        payload: searchResult
    }
}

// movie search
export const fetchMovies = (page,  title, year) => {
    debugger
    return (dispatch) => {
        console.log(`https://www.omdbapi.com/?apikey=2d2d7142&${title ? 's='+title+'&' : ''}
        ${year ? 'y='+year+'&' : ''}type=movie&page=${page}`)
        axios.get(`https://www.omdbapi.com/?apikey=2d2d7142&${title ? 's='+title+'&' : ''}${year ? 'y='+year+'&' : ''}type=movie&page=${page}`)
        .then(response => {
            if (response.data && response.data.Response === 'True') {
                console.log(response)
                dispatch(fetchMoviesSuccess(response.data))
            } else {
                console.error('RESPONSE IS FALSE')
            }
        }).catch(err => {
            console.error(err)
        })
    }
}