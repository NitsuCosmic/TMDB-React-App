import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Genres from "../Genres/Genres";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

interface Props {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

export default function Menu({ isMenuOpen, toggleMenu }: Props) {
	return (
		<aside className={`aside ${isMenuOpen ? "open" : "closed"}`}>
			<button className="aside__menu-btn" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<SearchBar inMenu={true} />
			<Genres label="Movie Genres" genre="movie" />
			<Genres label="TV Genres" genre="tv" />
		</aside>
	);
}
