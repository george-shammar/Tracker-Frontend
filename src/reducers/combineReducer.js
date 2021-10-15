import { combineReducers } from 'redux';
import allTrackersReducer from './getTrackerReducer';
import signInReducer from './SignInReducer';
import createTrackerReducer from './createTrackerReducer';

const reducers = {
  username: signInReducer,
  allTrackers: allTrackersReducer,
  tracker: createTrackerReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
