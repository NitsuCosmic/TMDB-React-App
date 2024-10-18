import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<header>
				<NavBar toggleMenu={toggleMenu} />
			</header>
			<div className="main-wrapper">
				<Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				<main className="main">
					<List listTitle="Upcoming Movies" isMovie={true} source="upcoming" />
					<List listTitle="Top Movies" isMovie={true} source="top_rated" />
					<List listTitle="Popular Movies" isMovie={true} source="popular" />
					<List
						listTitle="Now Playing Movies"
						isMovie={true}
						source="now_playing"
					/>
					<List
						listTitle="TV Series Airing Today"
						isMovie={false}
						source="airing_today"
					/>
					<List
						listTitle="Series On The Air"
						isMovie={false}
						source="on_the_air"
					/>
					<List
						listTitle="Top Rated Series"
						isMovie={false}
						source="top_rated"
					/>
				</main>
			</div>
		</>
	);
}

export default App;
