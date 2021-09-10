import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import getTrackerReducer from './getTrackerReducer';

const reducers = {
  username: signInReducer,
  trackers: getTrackerReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;