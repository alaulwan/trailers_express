import express from 'express';
import TrailersController from '../controllers/TrailersController';
import getTailersValidator from '../validations';

const router = express.Router();

router.route('/').get(getTailersValidator, TrailersController.getTailers);

export default router;