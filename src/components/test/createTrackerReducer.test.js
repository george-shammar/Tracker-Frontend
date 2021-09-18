import createTrackerReducer from '../../reducers/createTrackerReducer';

test('should return the initial state', () => {
    expect(createTrackerReducer(undefined, {})).toEqual({});
});

test('should return the initial state with empty object', () => {
    expect(createTrackerReducer(undefined, {})).not.toEqual({
      id: 1,
    blood_pressure: 1,
    blood_glucose: 1,
    user_id: 1,
    });
});