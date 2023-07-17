import {useState} from 'react'
import Navbar from "../../components/Navbar";
import ListMovie from "../../components/ListMovie";
import FilterPage from "../../components/FilterPage";

const Home = () => {
	const [filterData, setFilterData] = useState('Trending')
	const [query, setQuery] = useState("")

	const handleFilterData = e => {
		setFilterData(e)
	}

	const handleQuery = e => {
		setQuery(e)
	}

	return (
		<div className="pb-12">
			<Navbar setQuery={handleQuery}/>
			<div className="pt-4 px-28">
				<FilterPage setData={handleFilterData}/>
				<ListMovie data={filterData} query={query}/>
			</div>
		</div>
	);
};

export default Home;
