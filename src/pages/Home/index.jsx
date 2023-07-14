import {useState} from 'react'
import Navbar from "../../components/Navbar";
import ListMovie from "../../components/ListMovie";
import FilterPage from "../../components/FilterPage";

const Home = () => {
	const [filterData, setFilterData] = useState('All Movies')

	const handleFilterData = e => {
		setFilterData(e)
	}

	return (
		<div className="pb-12">
			<Navbar />
			<div className="pt-4 px-28">
				<FilterPage setData={handleFilterData}/>
				<ListMovie data={filterData}/>
			</div>
		</div>
	);
};

export default Home;
