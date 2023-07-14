import { useEffect, useState } from "react";
import { getMovies, getGenres } from "../../utils/getData";

const ListMovie = () => {
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

	return (
		<div className="flex flex-row gap-6 flex-wrap justify-center">
			{movies?.map((movie, index) => {
				return (
					<div key={index}>
						<div className="card w-70 bg-base-100 shadow-xl">
							<figure>
								<img
									src={`${import.meta.env.VITE_APP_IMAGE_URL}/${
										movie.backdrop_path
									}`}
									alt={movie.title}
                                    className="w-full"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{movie.title}
									<div className="badge badge-secondary">{movie.vote_average}</div>
								</h2>
								<p>{movie.overview.slice(0, 60)}</p>
								<div className="card-actions justify-end">
									<div className="badge badge-outline">{movie.release_date}</div>
									<div className="badge badge-outline">
                                        {
                                           genres?.find((genre) => genre.id === movie.genre_ids[0])?.name
                                        }
                                    </div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ListMovie;
