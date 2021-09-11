import { createUser, fetchUser } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const getUserTrackers = (userId) => async (dispatch) => {
    const payload = await fetchUser(userId);
    dispatch({ type: 'measurements/getUserTrackers', payload});
}

export { newUser, getUserTrackers };