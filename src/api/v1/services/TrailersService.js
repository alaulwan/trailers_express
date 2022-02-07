import * as utils from '../helpers/utils';
import TmdbAPI from '../../../3rdPartyApi/tmdb';

export default class TrailersController {
	static async getTailersUrls(viaplayLink) {
		const movieDetails = await utils.getHttpLink(viaplayLink);
		const movieName = movieDetails._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.title;
		const productionYear = movieDetails._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.production.year;

		const movieId = await TmdbAPI.getMovieId(movieName, productionYear);
		const trailersIds = await TmdbAPI.getTrailersIds(movieId);
		return trailersIds.map( videoId => utils.toYoutubeUrl( videoId ));
	}
}