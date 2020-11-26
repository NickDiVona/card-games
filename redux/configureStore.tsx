import { createStore, combineReducers } from 'redux';
import { deviceLayoutReducer } from './deviceLayoutReducer';

const rootReducer = combineReducers({
  deviceLayout: deviceLayoutReducer
});

const store = createStore(rootReducer);

export default store;
