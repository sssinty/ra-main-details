import axios from "axios";

export const fetchListApi = async() => {
	const response = await axios.get('http://localhost:7070/api/services');
	console.log(response.data);
	return response.data;
}

export const fetchItemID = async (id : string | number) => {
	const response = await axios.get(`http://localhost:7070/api/services/${id}`);
	console.log(response.data);
	return response.data;
}
