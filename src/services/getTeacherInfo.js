import axios from "axios";

const url = "https://localhost:7172/api/Teacher";

const getTeacher = async () => {
  try {
    const response = await axios.get(url);
    const teacherData = response.data;

    return { teacherData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default getTeacher;