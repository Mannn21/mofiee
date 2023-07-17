import axios from "axios";
import { URL } from "./urlData";

export const getMovieById = async id => {
	const movieResponse = await axios({
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
		},
	});
	return movieResponse.data;
}; 

export const getData = async (filter, page) => {
	const inFilter = URL?.find(item => item.filter === filter)?.path;
	try {
		const response = await axios({
			method: "GET",
			url: `${inFilter}?page=${page}`,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
			},
		});

		return response.data.results;
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
		});
		return response.data.results;
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
