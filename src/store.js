import {createStore} from 'redux'
import moviesReducer from './ducks/moviesReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(moviesReducer, devToolsEnhancer())