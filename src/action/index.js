import { createUser, fetchUser } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const getUserTrackers = async (userId) => {
    const payload = await fetchUser(userId);
    dispatch({ type: 'measurements/getUserTrackers', payload});
}

export { newUser, getUserTrackers };