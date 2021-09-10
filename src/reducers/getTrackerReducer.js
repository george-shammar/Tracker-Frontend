const initialState = [];

const getTrackerReducer = (trackers = initialState, action) => {
    switch (action.type) {
        case 'measurements/getUserTrackers':
          return action.payload;
        default:
      return trackers;
    }
};