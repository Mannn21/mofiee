import Star from "../Star";
import PropTypes from "prop-types";
import "../../index.css";

const DetailMovie = ({ movie }) => {
	const date = new Date(movie.releaseDate);
	const options = { day: "numeric", month: "long", year: "numeric" };
	const formattedDate = date.toLocaleDateString("id-ID", options);
	return (
		<div className="w-screen h-screen background">
			<div className="w-2/4 h-full py-32 px-14 flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<div className="p-4 w-auto text-center">
						<h1 className="text-5xl font-semibold tracking-wider text-white">
							{movie.title}
						</h1>
					</div>
					<div className="ml-10">
						<span className="text-white text-xl tracking-wider py-1">
							Status : {movie.status}
						</span>
					</div>
				</div>
				<div className="ml-10 flex flex-col gap-2">
					<div className="flex flex-row gap-3">
						{movie.genre.map(item => {
							return (
								<span
									key={item.id}
									className="text-amber-400 text-xl font-normal tracking-wide">
									{item.name}
								</span>
							);
						})}
					</div>
					<div>
						<span className="text-slate-100 text-lg tracking-wide">
							{movie.overview}
						</span>
					</div>
					<div className="flex flex-row gap-4 items-center">
						<span className="text-yellow-500 text-xl">
							<Star stars={movie.rate / 2} />
						</span>
						<span className="text-white text-xl">
							{movie.reviewer} Reviewer
						</span>
					</div>
					<div>
						<span className="text-white text-lg">
							Release Date : {formattedDate}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailMovie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired, // OK
		genre: PropTypes.array.isRequired, // OK
		status: PropTypes.string.isRequired, // OK
		rate: PropTypes.number.isRequired, //OK
		reviewer: PropTypes.number.isRequired, // OK
		releaseDate: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired, // OK
	}).isRequired,
};

export default DetailMovie;
