import axios from 'axios';

/** base url to make request to the themoviedatabase */
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3' // basically every page should have the same starting url
});
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar --> so the url will append the request foo-bar

export default instance;