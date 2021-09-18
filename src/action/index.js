import { createUser, fetchTrackers, createTracker } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const newTracker = (blood_pressure, blood_glucose, user_id) => async (dispatch) => {
    const payload = await createTracker(blood_pressure, blood_glucose, user_id);
    dispatch({ type: 'measurement/newTracker', payload });
}

const loadData = () => async (dispatch) => {
    const payload = await fetchTrackers();
    dispatch({ type: 'allTrackers/loadData', payload});
}

const selectAllTrackers = (state) => state.allTrackers;

const selectTrackers = (state) => {
    const allTrackers = selectAllTrackers(state);
   return allTrackers;
};

export { newUser, loadData, selectTrackers, newTracker };