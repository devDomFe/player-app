import axios from "axios";

const BASE_URL =
  "https://test.services.nbl.com.au/api_cache/nbl1/synergy?format=true&route=";

const fetchPlayersList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}persons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players list:", error);
    throw error; // rethrow the error to let the caller handle it
  }
};

export default {
  fetchPlayersList,
};
