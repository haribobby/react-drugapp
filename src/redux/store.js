// const { createStore } = require("redux");
import { createStore } from 'redux'
import { combinereducers } from './reducers/combinereducer';

const store = createStore(combinereducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;