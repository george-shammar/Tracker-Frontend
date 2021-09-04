import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import trackerReducer from './trackerReducer';

const reducers = {
  username: signInReducer,
  measurement: trackerReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;