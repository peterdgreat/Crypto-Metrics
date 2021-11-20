import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cryptoreducer from './crypto';
import globalreducer from './global';

const reducer = combineReducers({
  cryptoreducer,
  globalreducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
