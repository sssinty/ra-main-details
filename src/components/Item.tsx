import { useDispatch, useSelector } from "react-redux";
import {IState } from "../interface/interface";
import FaildFetch from "./FaildFetch";
import { getPost } from "../saga";
import { useParams } from "react-router-dom";


const Item = () => {
	const {item , loadingStatusPost} = useSelector((state: {state : IState}) => state.state);
	const state = useSelector((state: {state : IState}) => state.state);
	const dispatch = useDispatch();
	const params = useParams();

	console.log(loadingStatusPost, state)

	function hendlerClick() {
		dispatch(getPost(params.id));
	}

	if(loadingStatusPost === 'idle') {
		return <h2>Loading...</h2>
	}else if(loadingStatusPost === 'failed') {
		return <FaildFetch onClick={hendlerClick}/>
	}else {
		return (
			<div className="item">
				<p className="name">{item.name}</p>
				<p className="price">{item.price}</p>
				<p className="content">{item.content}</p>
			</div>
		)
	}
}

export default Item;