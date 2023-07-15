import React, { Suspense, useEffect, useState } from "react";
import { getGenres, getData, searchMovie } from "../../utils/getData";
import Skeleton from "../Skeleton"
import PropTypes from "prop-types";

const Card = React.lazy(() => import("../Card"))

const ListMovie = ({ data, query }) => {
	const [movies, setMovies] = useState([]);
	const [genresMovie, setGenres] = useState([]);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await getGenres();
				setGenres(response.genres);
			} catch (error) {
				console.error("Error while fetching movies:", error);
			}
		};

		fetchGenres();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (data === "All Movies") {
					const response = await getData(data);
					setMovies(response);
				} else {
					const response = await getData(data);
					setMovies(response.results);
				}
			} catch (error) {
				console.error("Error while fetching movies:", error);
			}
		};

		const fetchQuery = async () => {
			try {
				const response = await searchMovie(query);
				setMovies(response.results);
			} catch (error) {
				console.log(error);
			}
		};

		if (query.length === 0) {
			fetchData();
		}
		if (query.length >= 3) {
			fetchQuery();
		}
	}, [data, query]);

	return (
		<div className="flex flex-row gap-8 flex-wrap justify-center">
			{movies?.map((movie, index) => {
				if (
					movie &&
					movie.poster_path &&
					movie.adult === false &&
					((movie.genres && movie.genres.length !== 0) || movie.genre_ids)
				) {
					return (
						<div
							key={index}
							className="flex flex-col gap-1 items-center w-64 h-auto pb-2 rounded-md shadow-slate-700 shadow-md cursor-pointer">
							<Suspense fallback={<Skeleton />}>
								<Card movie={movie} genresMovie={genresMovie} />
							</Suspense>
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

ListMovie.propTypes = {
	data: PropTypes.string.isRequired,
};

ListMovie.propTypes = {
	query: PropTypes.string.isRequired,
};

export default ListMovie;
