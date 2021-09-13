import { createUser, fetchTrackers } from '../api';

const newUser = (username) => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
};

const loadData = () => async (dispatch) => {
    const payload = await fetchTrackers();
    dispatch({ type: 'allTrackers/loadData', payload});
}

const setSearchTerm = (term) => ({
    type: 'searchTerm/setSearchTerm',
    payload: term,
});

export { newUser, loadData };