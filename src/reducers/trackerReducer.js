const initialState = {
    blood_pressure: "",
    blood_glucose: "",
    id: "",
};

const trackerReducer = (measurement = initialState, action) => {
    switch (action.type) {
      case 'measurement/newTracker':
        return action.payload;
      default:
        return measurement;
    }
};

export default trackerReducer;