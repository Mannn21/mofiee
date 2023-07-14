import axios from "axios";
import { URL } from "./urlData";

export const getMovies = async () => {
	try {
		const response = await axios({
			method: "GET",
			url: `${import.meta.env.VITE_APP_BASE_URL}/movie/top_rated?page=2`,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error while fetching movies:", error);
		throw error;
	}
};

export const getData = async filter => {
	const inFilter = URL?.find(item => item.filter === filter)?.path;
	try {
		if (filter === "All Movies") {
			const response = await axios({
				method: "GET",
				url: inFilter,
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
				},
			});
			const moviePromises = await response.data.results.map(async (item) => {
        if (item.id !== null) {
          const movieResponse = await axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${item.id}?language=en-US`,
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
            },
          });
          return movieResponse.data;
        }
      });
      
      const movies = await Promise.all(moviePromises);
      return movies
		} else {
			const response = await axios({
				method: "GET",
				url: inFilter,
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
				},
			});

			return response.data;
		}
	} catch (error) {
		console.error("Error while fetching movies:", error);
		throw error;
	}
};

export const searchMovie = async query => {
	try {
		const response = await axios({
			method: "GET",
			url: `${
				import.meta.env.VITE_APP_BASE_URL
			}/search/movie?query=${query}&api_key=${
				import.meta.env.VITE_APP_API_KEY
			}`,
			// headers: {
			//   Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
			// },
		});
		return response.data;
	} catch (error) {
		console.error("Error while fetching movies:", error);
		throw error;
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

		return response.data;
	} catch (error) {
		console.error("Error while fetching movies:", error);
		throw error;
	}
};
