import TrailersController from '../../src/api/v1/controllers/TrailersController';
import {mockRequest, mockResponse} from 'mock-req-res';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import responses from './data/response';
const {tmdb_api_Key: apiKey} = process.env;

describe('TrailersController', () => {
	let mockAxios;
	const res = mockResponse();
	res.send = jest.fn().mockImplementation(() => {
		return {
			promise: jest.fn().mockResolvedValue()
		};
	});

	beforeEach(() => {
		mockAxios = new MockAdapter(axios);
	});

	afterEach(() => {
		mockAxios.reset();
	});

	test('getTailers should return valid Tailers list', async () => {
		const req = mockRequest({
			query: {
				viaplayLink: 'https://content.viaplay.se/pcdash-se/film/alaa-2020'
			}
		});
		

		mockAxios.onGet('https://content.viaplay.se/pcdash-se/film/alaa-2020').reply(200, responses.getViaplayResponse);
		mockAxios.onGet(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=alaa&year=2015`).reply(200, responses.getMovieId);
		mockAxios.onGet(`https://api.themoviedb.org/3/movie/111/videos?api_key=${apiKey}`).reply(200, responses.getTrailersIds);

		await TrailersController.getTailers(req, res);

		expect(mockAxios.history.get.length).toEqual(3);
		expect(mockAxios.history.get[0].url).toEqual('https://content.viaplay.se/pcdash-se/film/alaa-2020');
		expect(mockAxios.history.get[1].url).toEqual(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=alaa&year=2015`);
		expect(mockAxios.history.get[2].url).toEqual(`https://api.themoviedb.org/3/movie/111/videos?api_key=${apiKey}`);

		expect(res.send).toHaveBeenCalledWith(['https://www.youtube.com/watch?v=aaa', 'https://www.youtube.com/watch?v=bbb']);
	});
});