import axios from "axios";

export const getMovies = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BASE_URL}/movie/popular`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        },
      });
  
      return response.data
    } catch (error) {
      console.error("Error while fetching movies:", error);
      throw error
    }
};

export const getGenres = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_APP_BASE_URL}/genre/movie/list`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
      },
    });

    return response.data
  } catch (error) {
    console.error("Error while fetching movies:", error);
    throw error
  }
}