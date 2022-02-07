import { query } from 'express-validator';

export default  [
	query('viaplayLink').not().isEmpty().withMessage('viaplayLink cannot be empty'),
	query('viaplayLink').isURL().withMessage('viaplayLink should be a valid url')
];
