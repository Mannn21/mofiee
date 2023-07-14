import { useEffect, useState } from "react";
import { getGenres, getData } from "../../utils/getData";
import PropTypes from "prop-types";

const ListMovie = ({ data }) => {
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
		fetchData();
	}, [data]);

	// console.log(movies);

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
							<div className="flex justify-center w-full">
								<img
									src={`${import.meta.env.VITE_APP_IMAGE_URL}/${
										movie.poster_path
									}`}
									alt={movie.title}
								/>
							</div>
							<div className="flex flex-col gap-2 w-full h-auto px-2">
								<div className="flex flex-row justify-between">
									<span className="text-yellow-500 text-xl">★★★★★</span>
									<span>
										{movie.genre_ids && !movie.genres
											? movie.genre_ids
													.slice(0, 1)
													.map(
														item =>
															genresMovie.find(genre => genre.id === item)?.name
													)
											: movie.genres.slice(0, 1).map(item => item.name)}
									</span>
								</div>
								<div className="text-center">
									<span className="text-white text-lg tracking-wider">
										{movie.title}
									</span>
								</div>
							</div>
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

export default ListMovie;
