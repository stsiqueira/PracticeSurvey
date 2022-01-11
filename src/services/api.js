import axios from 'axios'

export const dbUrl =   `http://localhost:5000/`

export const fetchData = async (path) => {
    try {
      const response = await axios.get(dbUrl+path);
      return response.data
    } catch (err) {
      console.error(err);
    }
  }