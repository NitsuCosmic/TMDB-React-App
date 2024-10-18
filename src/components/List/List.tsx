import { useEffect, useState } from "react";
import { options } from "../../../private/token/token";
import Card from "../Card/Card";
import "./List.css";

interface Props {
	listTitle: string;
	isMovie: boolean;
	source: string;
}

interface Card {
	id: number;
}

export default function List({ listTitle, isMovie, source }: Props) {
	const [data, setData] = useState<object[]>([]);

	useEffect(() => {
		async function fetchList() {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/${
						isMovie ? "movie" : "tv"
					}/${source}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
					options
				);
				const data = await response.json();
				setData(data.results);
				console.log(data.results);
			} catch (err) {
				console.error(err);
			}
		}

		fetchList();
	}, []);

	return (
		<section className="list">
			<h3 className="list__header-title">{listTitle}</h3>
			<div className="list__content">
				{data &&
					data.map((result) => (
						<Card key={result?.id} info={result} isMovie={isMovie} />
					))}
			</div>
		</section>
	);
}
