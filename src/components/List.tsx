import {useDispatch, useSelector } from "react-redux";
import { IItem, IState } from "../interface/interface";
import { Link } from "react-router-dom";
import { getPost, getState } from "../saga";
import { useEffect } from "react";
import { getPostRequest, getStateRequest } from "../redux/stateData";
import FaildFetch from "./FaildFetch";

const List = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: {state : {list : IItem[]}}) => state.state.list);
	const {loadingStatusState} = useSelector((state: {state : IState }) => state.state);

	useEffect(() => {
		void dispatch(getState());

	}, [dispatch]);
	
	function handleClick(event : React.MouseEvent) {
		const target = event.target as HTMLElement;
		dispatch(getPostRequest());
		dispatch(getPost((target.parentNode as HTMLFormElement).id));
	}

	function handleClickFaild() {
	dispatch(getStateRequest());
		dispatch(getState());
	}
	console.log(loadingStatusState)
	if (loadingStatusState === 'idle') {
		return <h2>Loading...</h2>
	} else if (loadingStatusState === 'failed') {
		return <FaildFetch onClick={handleClickFaild}/>
	} else {
		return(
			<ul className="list">
				{state.map((elem : IItem) => {
					return(
						<Link to={`/${elem.id}/details`} onClick={handleClick}>
							<li id={elem.id} key={elem.id}>
								<p className="name">{elem.name}</p>
							</li>
						</Link>
					)
				})}
			</ul>
		)
	}
}

export default List;