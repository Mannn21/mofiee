import PropTypes from "prop-types";

const Card = ({ movie, genresMovie }) => {
	return (
		<>
			<div className="flex justify-center w-full">
				<img
					src={`${import.meta.env.VITE_APP_IMAGE_URL}/${movie.poster_path}`}
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
										item => genresMovie.find(genre => genre.id === item)?.name
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
		</>
	);
};

Card.propTypes = {
	movie: PropTypes.shape({
		poster_path: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
		genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};

Card.propTypes = {
	genresMovie: PropTypes.array.isRequired,
};

export default Card;
