import {createStore, applyMiddleware, combineReducers} from 'redux'
import userReducer from './userReducer'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    user: userReducer,
    reducer: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
