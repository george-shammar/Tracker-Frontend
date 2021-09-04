import { createUser } from '../api';

const newUser = () => async (dispatch) => {
    const payload = await createUser(username);
    dispatch({ type: 'signIn/newUser', payload });
  };

export { newUser };