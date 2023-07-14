import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../../utils/iconFilter";
import PropTypes from "prop-types"

const FilterPage = ( {setData} ) => {
	const handleFilter = e => {
		setData(e)
	}
	
	return (
		<div className="flex flex-row justify-center items-center gap-24 p-2 mb-10 bg-slate-500 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
			{Icon?.map((item, index) => {
				return (
					<div key={index} className="flex flex-row gap-2 cursor-pointer" onClick={() => handleFilter(item.title)}>
						<FontAwesomeIcon
							icon={item.icon}
							style={{ color: "#ff1900" }}
							size="lg"
						/>
						<span className="text-white tracking-wider">{item.title}</span>
					</div>
				);
			})}
		</div>
	);
};

FilterPage.propTypes = {
	setData: PropTypes.func.isRequired,
};

export default FilterPage;
