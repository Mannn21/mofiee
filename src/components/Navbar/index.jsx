import { useState } from "react"

const Navbar = () => {
	const [query, setQuery] = useState("")

	console.log(query)

	return (
		<div className="navbar text-white bg-transparent flex justify-between">
			<div>
				<a className="btn btn-ghost normal-case text-3xl">Mofiee Apps</a>
			</div>
			<div >
				<div className="form-control">
					<input
						type="text"
						onChange={e => setQuery(e.target.value)}
						placeholder="Search movie"
						className="input input-bordered bg-white w-64 h-9 tracking-wide mx-4 text-base-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
