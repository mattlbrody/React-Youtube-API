import axios from 'axios';

const KEY = "AIzaSyAPfsEDj8Xt6FP-Es4Wu_C_Fgj3BWtoaUw";

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});