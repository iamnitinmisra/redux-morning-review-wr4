const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
}

const SET_MOVIE_INFO = 'SET_MOVIE_INFO'

export const setMovieInfo = (title, poster, rating) => {
    return {
        type: SET_MOVIE_INFO,
        payload: {title, poster, rating}
    }
}



function moviesReducer(state = initialState, action){
    switch(action.type){
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default moviesReducer