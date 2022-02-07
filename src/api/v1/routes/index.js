import express from 'express';
import trailersRoute from './Trailers';

const router = express.Router();
router.use('/trailers', trailersRoute);

export default router;
