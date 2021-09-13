import { createUser, fetchTrackers } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const getTrackers = () => async (dispatch) => {
    const payload = await fetchTrackers();
    dispatch({ type: 'measurements/getTrackers', payload});
}

export { newUser, getTrackers };