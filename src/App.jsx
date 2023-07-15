import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/detail/:id" element={<Detail />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</div>
	);
};

export default App;
