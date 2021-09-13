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

const fetchTrackers = async () => {
  try {
    const response = await fetch('https://fierce-garden-46227.herokuapp.com/api/trackers/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                Accept: 'application/json' },
      body: JSON.stringify(),
    });
    console.log(response);
    return response.json();
    
  } catch (error) {
    return error.message;
  }
} 

export { createUser, fetchTrackers };