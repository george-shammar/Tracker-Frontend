import signInReducer from '../../reducers/SignInReducer';

test('should return the initial state', () => {
  expect(signInReducer(undefined, {})).toEqual('');
});

test('should return the initial state with empty string', () => {
  expect(signInReducer(undefined, {})).not.toEqual('username');
});

test('should return a defined initial state', () => {
  expect(signInReducer(undefined, {})).toBeDefined();
});
