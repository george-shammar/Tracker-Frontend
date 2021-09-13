import { combineReducers } from 'redux';
import allTrackersReducer from './getTrackerReducer';
import signInReducer from './SignInReducer';
import { searchTermReducer } from './filter';

const reducers = {
  username: signInReducer,
  allTrackers: allTrackersReducer,
  searchTerm: searchTermReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;