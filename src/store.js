import { createStore, combineReducers } from 'redux'
import homeReducer from './reducers/home-reducer'

const reducer = combineReducers({
 homeReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;