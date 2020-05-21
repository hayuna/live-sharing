import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user.reducer';

const middlewares = [];

const rootReducer = combineReducers({ userReducer });

export default createStore(rootReducer, composeWithDevTools(...middlewares));


