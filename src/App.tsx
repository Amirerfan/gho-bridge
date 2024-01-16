import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";


function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
