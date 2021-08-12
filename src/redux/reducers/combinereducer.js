// const { combineReducers } = require("redux");
import { combineReducers } from 'redux';
import { drugReducer } from './drugReducer';

export const combinereducers = combineReducers({
    alldrugs: drugReducer
})