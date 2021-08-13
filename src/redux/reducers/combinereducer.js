// const { combineReducers } = require("redux");
import { combineReducers } from 'redux';
import { drugReducer } from './drugReducer';
import userReducer from '../user/userReducer';

export const combinereducers = combineReducers({
    alldrugs: drugReducer,
    users: userReducer
})