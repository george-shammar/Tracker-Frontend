import { createUser, createTracker } from '../api';

const newUser = (username) => async (dispatch) => {
  const payload = await createUser(username);
  dispatch({ type: 'signIn/newUser', payload });
};

const newTracker = (bloodPressure, bloodGlucose, userId) => async (dispatch) => {
  const payload = await createTracker(bloodPressure, bloodGlucose, userId);
  dispatch({ type: 'measurement/newTracker', payload });
};

const selectAllTrackers = (state) => state.allTrackers;

const selectTrackers = (state) => {
  const allTrackers = selectAllTrackers(state);
  return allTrackers;
};

export {
  newUser, selectTrackers, newTracker,
};
