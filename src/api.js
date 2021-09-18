import 'regenerator-runtime/runtime';
import axios from 'axios';

const createTracker = async (bloodPressure, bloodGlucose, userId) => {
  const response = await axios.post(
    'https://fierce-garden-46227.herokuapp.com/api/trackers/',
    {
      bloodPressure,
      bloodGlucose,
      userId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return response;
};

const createUser = async (username) => {
  try {
    const response = await fetch('https://fierce-garden-46227.herokuapp.com/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(username),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

const fetchTrackers = async () => {
  try {
    const response = await fetch('https://fierce-garden-46227.herokuapp.com/api/trackers/');
    return response.json();
  } catch (error) {
    return error.message;
  }
};

export { createUser, fetchTrackers, createTracker };
