import { createUser, fetchTrackers } from '../api';
import { selectSearchTerm } from '../reducers/filter';

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

const clearSearchTerm = () => ({
    type: 'searchTerm/clearSearchTerm',
});

const selectAllTrackers = (state) => state.allTrackers;


const selectFilteredAllTrackers = (state) => {
    const allTrackers = selectAllTrackers(state);
    const searchTerm = selectSearchTerm(state);
  
    return allTrackers.filter((user) => user.username.toLowerCase().includes(searchTerm.toLowerCase())); /* eslint-disable-line max-len */
};

export { newUser, loadData, setSearchTerm, clearSearchTerm, selectFilteredAllTrackers };