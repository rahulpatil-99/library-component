import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home-reducer';
import adminReducer from  './reducers/admin-reducer';

const reducer = combineReducers({
 homeReducer,
 adminReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;