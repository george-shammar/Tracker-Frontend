const initialState = '';

const signInReducer = (username = initialState, action) => {
  switch (action.type) {
    case 'signIn/newUser':
      return action.payload;
    default:
      return username;
  }
};

export default signInReducer;
