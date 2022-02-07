import axios from 'axios';
const {tmdb_api_Key: apiKey} = process.env;
const tmdbUrl = 'https://api.themoviedb.org';

export default class TmdbAPI {
	static async getMovieId( movieName, year ) {
		/* Fetch a Movie ID for querying the TMDB API */
		const endpoint = `${tmdbUrl}/3/search/movie?api_key=${apiKey}&query=${movieName}&year=${year}`;
		const res = await axios.get(endpoint);
		return res.data.results[0].id;
	}

	static async getTrailersIds ( movieId ) {
		/* Fetch single or multiple movie trailers via the TMDB API */
		const endpoint = `${tmdbUrl}/3/movie/${movieId}/videos?api_key=${apiKey}`;
		const res = await axios.get(endpoint);
		let { results } = res.data;
    
		// Strip all but videoId
		return results.map( result => result.key );
	}
}
