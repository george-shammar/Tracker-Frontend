const initialState = [];

const getTrackerReducer = (trackers = initialState, action) => {
    switch (action.type) {
        case 'measurements/getTrackers':
          return action.payload;
        default:
      return trackers;
    }
};

export default getTrackerReducer;