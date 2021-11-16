import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidreducer from './covid';

const reducer = combineReducers({
  covidreducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
