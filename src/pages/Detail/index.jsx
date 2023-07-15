import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils/getData.js";

const Detail = () => {
	const [movie, setMovie] = useState({
		title: "",
		genre: [],
		status: "",
		poster: "",
		background: "",
		rate: null,
		reviewer: null,
		releaseDate: "",
	});
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getMovieById(id);
			// console.log(response)
			setMovie({
				title: response.title,
				genre: response.genres,
				status: response.status,
				poster: response.poster_path,
				background: response.backdrop_path,
				rate: response.vote_average,
				reviewer: response.vote_count,
				releaseDate: response.release_date,
			});
		};

		fetchData();
	}, [id]);

	console.log(movie);
	return (
		<div className="w-screen h-screen">
			<div className="w-screen h-screen flex flex-row">
				<div className="w-3/5 h-screen">
					<img
						src={`${import.meta.env.VITE_APP_IMAGE_URL}/${movie.background}`}
						alt=""
						className="image-full h-full"
					/>
				</div>
				<div className="w-2/5 h-screen">
					<div className="flex flex-col gap-2 justify-center items-start px-10 w-full h-full border border-red-600">
						<h1 className="text-white text-4xl">{movie.title}</h1>
						<div className="flex flex-row gap-2 text-sm">
							{movie?.genre.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
						</div>
						<span> {movie.rate}</span>
						<span>{movie.reviewer}</span>
						<span>{movie.releaseDate}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
