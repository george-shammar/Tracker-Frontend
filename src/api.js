import 'regenerator-runtime/runtime';

const createUser = async (username) => {
    try {
      const response = await fetch(`https://fierce-garden-46227.herokuapp.com/api/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                  Accept: 'application/json' },
        body: JSON.stringify(username),
      });
      
      return response.json();
      
    } catch (error) {
      return error.message;
    }
};

const createTracker = async (blood_pressure, blood_glucose, id) => {
  try {
    const response = await fetch(`https://fierce-garden-46227.herokuapp.com/api/trackers/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                Accept: 'application/json' },
      body: JSON.stringify(blood_pressure, blood_glucose, id),
    });
    
    return response.json();
    
  } catch (error) {
    return error.message;
  }
};



export { createUser, createTracker };