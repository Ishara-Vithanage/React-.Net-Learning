import axios from 'axios';

const url = 'https://localhost:7172/api/Student';

const getStudent = async () => {
  try {
    const response = await axios.get(url);
    const users = response.data; 

    // Return both the departments and the count
    return { users };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getStudent;
