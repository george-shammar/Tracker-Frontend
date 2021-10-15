import 'regenerator-runtime/runtime';
import axios from 'axios';
/* eslint-disable */
const createTracker = async (blood_pressure, blood_glucose, user_id) => {
  const response = await axios.post(
    'https://fierce-garden-46227.herokuapp.com/api/trackers/',
    {
      blood_pressure,
      blood_glucose,
      user_id,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  console.log('called');
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
