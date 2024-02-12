import { MouseEventHandler } from "react";

interface IFaild {
	onClick?: MouseEventHandler<HTMLButtonElement>
}
const FaildFetch = ({onClick} : IFaild) => {
	return (
		<div>
			<h2>Произошла ошибка</h2>
			<button onClick={onClick} type="button">Повторить запрос</button>
		</div>
	)
}

export default FaildFetch;