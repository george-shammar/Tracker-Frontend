import { combineReducers } from 'redux';
import allTrackersReducer from './getTrackerReducer';
import signInReducer from './SignInReducer';

const reducers = {
  username: signInReducer,
  allTrackers: allTrackersReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;