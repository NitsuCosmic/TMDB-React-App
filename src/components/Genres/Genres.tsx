import { useEffect, useState } from "react";
import { TOKEN } from "../../../private/token/token.ts";
import "./Genres.css";

interface Props {
	label: string;
	genre: string;
}

interface Genre {
	id: number;
	name: string;
}

export default function Genres({ label, genre }: Props) {
	const [genres, setGenres] = useState<Genre[]>();

	useEffect(() => {
		async function fetchGenres() {
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: "Bearer " + TOKEN,
				},
			};
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/genre/${genre}/list`,
					options
				);
				const data = await response.json();
				setGenres(data.genres);
			} catch (err) {
				console.error(err);
			}
		}

		fetchGenres();
	}, []);

	return (
		<div className="wrapper">
			<h3 className="list__title">{label}</h3>
			<ul className="aside__list">
				{genres &&
					genres.map((genre) => (
						<li className="list__item" key={genre.id}>
							<a href="#" className="list__link">
								{genre.name}
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}
