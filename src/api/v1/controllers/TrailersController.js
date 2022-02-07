import {validationResult} from 'express-validator';
import TrailersService from '../services/TrailersService';

export default class TrailersController {
	static async getTailers(req, res){
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				errors: errors.array()
			});
		}
        
		try {
			// viaplayLink example https://content.viaplay.se/pcdash-se/film/focus-2015
			const trailers = await TrailersService.getTailersUrls(req.query.viaplayLink);
			res.send(trailers);
		} catch (error) {
			const status = error.response?.status || 500;
			const response = error.response?.statusText || 'Internal Server Error';
			res.status(status).send({status, response});
		}      
	}
}