import express from 'express';

import apiV1Router from './api/v1/routes';

import cache from './config/Cache.js';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', cache(60), (req, res) => {
	res.send('e.g GET /api/v1/trailers?viaplayLink=https://content.viaplay.se/pcdash-se/film/focus-2015');
});

app.use('/api/v1', cache(10), apiV1Router);

app.listen(port, () => console.log(`Listening on port ${port}...`));