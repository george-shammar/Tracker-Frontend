const initialState = {};

const createTrackerReducer = (tracker = initialState, action) => {
  switch (action.type) {
    case 'measurement/newTracker':
      return action.payload;
    default:
      return tracker;
  }
};

export default createTrackerReducer;
