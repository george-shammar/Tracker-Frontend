import allTrackersReducer from '../../reducers/getTrackerReducer';

test('should return the initial state', () => {
  expect(allTrackersReducer(undefined, {})).toEqual([]);
});

test('should return the initial state with empty array', () => {
  expect(allTrackersReducer(undefined, {})).not.toEqual([{
    id: 1,
  blood_pressure: 1,
  blood_glucose: 1,
  user_id: 1,
  }]);
});

test('should return a defined initial state', () => {
  expect(allTrackersReducer(undefined, {})).toBeDefined();
});

test('should return a truthy', () => {
  expect(allTrackersReducer(undefined, {})).toBeTruthy();
});
