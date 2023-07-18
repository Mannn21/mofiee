import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils/getData.js";
import DetailMovie from "../../components/DetailMovie/index.jsx";

const Detail = () => {
	const [movie, setMovie] = useState({
		title: "",
		genre: [],
		status: "",
		poster: "",
		background: "",
		rate: 0,
		reviewer: 0,
		releaseDate: "",
		overview: ""
	});
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getMovieById(id);
			setMovie({
				title: response.title,
				genre: response.genres,
				status: response.status,
				poster: response.poster_path,
				background: response.backdrop_path,
				rate: response.vote_average,
				reviewer: response.vote_count,
				releaseDate: response.release_date,
				overview: response.overview
			});
		};

		fetchData();
	}, [id]);

	// console.log(movie);
	return (
		<div className="w-screen h-screen">
			<div className="w-screen h-screen flex flex-row">
				<div className="w-screen h-screen overflow-hidden z-0 absolute">
					<img
						src={`${import.meta.env.VITE_APP_IMAGE_URL}/${movie.background}`}
						alt=""
						className="bg-cover h-screen w-screen"
					/>
				</div>
				<div className="z-10">
					<DetailMovie movie={movie}/>
				</div>
			</div>
		</div>
	);
};

export default Detail;
