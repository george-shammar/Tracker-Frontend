import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import { searchTermReducer } from './filter';

const reducers = {
  username: signInReducer,
  
  searchTerm: searchTermReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;