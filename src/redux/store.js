// const { createStore } = require("redux");
import { createStore, applyMiddleware, compose } from 'redux'
import { combinereducers } from './reducers/combinereducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(combinereducers, compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store
