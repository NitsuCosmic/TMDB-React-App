import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

interface Props {
	toggleMenu: () => void;
}

export default function NavBar({ toggleMenu }: Props) {
	return (
		<nav className="nav">
			<button className="nav__btn-menu" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<h1 className="title">TMDB App</h1>
			<ul className="nav__list">
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						Movies
					</a>
				</li>
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						Series
					</a>
				</li>
			</ul>
			<SearchBar inMenu={false} />
		</nav>
	);
}
