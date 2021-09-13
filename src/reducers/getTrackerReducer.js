const initialState = [];

const allTrackersReducer = (allTrackers = initialState, action) => {
    switch (action.type) {
        case 'allTrackers/loadData':
          return action.payload;
        default:
      return allTrackers;
    }
};

export default allTrackersReducer;