import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cryptoreducer from './crypto';

const reducer = combineReducers({
  cryptoreducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
