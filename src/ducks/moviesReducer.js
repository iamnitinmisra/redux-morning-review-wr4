const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
}

const SET_MOVIE_INFO = 'SET_MOVIE_INFO'
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

export const setMovieInfo = (title, poster, rating) => {
    return {
        type: SET_MOVIE_INFO,
        payload: {title, poster, rating}
    }
}

export const updateMovieList = (newMovie) => {
    // console.log('redux', newMovie)
    return {
        type: UPDATE_MOVIE_LIST,
        payload: newMovie
    }
}

function moviesReducer(state = initialState, action){
    switch(action.type){
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        case UPDATE_MOVIE_LIST:
            return {...state, movies: [...state.movies, action.payload]}
        default:
            return state
    }
}

export default moviesReducer