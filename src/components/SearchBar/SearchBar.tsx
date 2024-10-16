import "./SearchBar.css";

interface Props {
	inMenu: boolean;
}

export default function SearchBar({ inMenu }: Props) {
	return (
		<form className={inMenu ? "form-menu" : "form"}>
			<input
				type="text"
				placeholder="Type to search..."
				className="form__input"
			/>
		</form>
	);
}
