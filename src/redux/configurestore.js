import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cryptoreducer from './crypto';
import globalreducer from './global';

const reducer = combineReducers({
  cryptoreducer,
  globalreducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
