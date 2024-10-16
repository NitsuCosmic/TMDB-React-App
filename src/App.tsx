import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<NavBar toggleMenu={toggleMenu} />
			<Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<main></main>
		</>
	);
}

export default App;
