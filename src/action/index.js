import { createUser, fetchTrackers, createTracker } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const newTracker = (blood_pressure, blood_glucose, user_id) => async (dispatch) => {
    
}

const loadData = () => async (dispatch) => {
    const payload = await fetchTrackers();
    dispatch({ type: 'allTrackers/loadData', payload});
}

const selectAllTrackers = (state) => state.allTrackers;

const selectFilteredTrackers = (state) => {
    const allTrackers = selectAllTrackers(state);
   return allTrackers;
};

export { newUser, loadData, selectFilteredTrackers };