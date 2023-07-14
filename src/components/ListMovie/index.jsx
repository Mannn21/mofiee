import { useEffect, useState } from "react";
import { getMovies, getGenres } from "../../utils/getData";
import PropTypes from "prop-types"

const ListMovie = ({data}) => {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getMovies();
				setMovies(response.results);
			} catch (error) {
				console.error("Error while fetching movies:", error);
			}
		};

		const fetchGenres = async () => {
			try {
				const response = await getGenres();
				setGenres(response.genres);
			} catch (error) {
				console.error("Error while fetching movies:", error);
			}
		};

		fetchData();
		fetchGenres();
	}, []);

	console.log(data)

	return (
		<div className="flex flex-row gap-8 flex-wrap justify-center">
			{movies?.map((movie, index) => {
				return (
					<div
						key={index}
						className="flex flex-col gap-1 items-center w-64 h-auto pb-2 rounded-md shadow-slate-700 shadow-md cursor-pointer"
					>
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
								<span className="text-yellow-500 text-xl">
									★★★★★
								</span>
								<span>
									{movie.genre_ids.slice(0, 1).map(
										item => genres.find(genre => genre.id === item)?.name
									)}
								</span>
							</div>
							<div className="text-center">
								<span className="text-white text-lg tracking-wider">{movie.title}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

ListMovie.propTypes = {
	data: PropTypes.string.isRequired,
};


export default ListMovie;
