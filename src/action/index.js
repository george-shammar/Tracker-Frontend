import { createTracker, createUser } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const newTracker = (blood_pressure, blood_glucose, id) => async (dispatch) => {
  const payload = await createTracker(blood_pressure, blood_glucose, id);
  dispatch({ type: 'measurement/newTracker', payload });
}

export { newUser, newTracker };