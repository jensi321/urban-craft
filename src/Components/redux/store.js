import { createStore, combineReducers } from 'redux';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

const store = createStore(rootReducer);

export default store;
