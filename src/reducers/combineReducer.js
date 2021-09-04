import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';

const reducers = {
  username: signInReducer
 
};

const rootReducer = combineReducers(reducers);

export default rootReducer;