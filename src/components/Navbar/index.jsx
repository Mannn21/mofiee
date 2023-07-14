const Navbar = () => {
	return (
		<div className="navbar text-white bg-transparent flex justify-between">
			<div>
				<a className="btn btn-ghost normal-case text-xl">Mofiee Apps</a>
			</div>
			<div >
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered bg-white w-24 md:w-auto text-base-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
