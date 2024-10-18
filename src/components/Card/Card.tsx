import {
	backdropSizes,
	IMG_SECURE_BASE_URL,
} from "../../../private/token/token";
import "./Card.css";

interface Props {
	info: object;
	isMovie: boolean;
}

export default function Card({ info, isMovie }: Props) {
	return (
		<div className="card">
			<picture className="card__img-container">
				<source
					media="(min-width: 768px)"
					srcSet={`${IMG_SECURE_BASE_URL}${backdropSizes.medium}${info.backdrop_path}`}
					className="card__source"
				/>
				<img
					loading="lazy"
					src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
					alt={info.title}
				/>
			</picture>
			<div className="card__info">
				<h3 className="card__name">{isMovie ? info.title : info.name}</h3>
			</div>
		</div>
	);
}
