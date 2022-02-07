import memoryCache from 'memory-cache';

const mcashe = new memoryCache.Cache();

export default function cache(duration) {
	return (req, res, next) => {
		if(req.method.toLowerCase() === 'get'){
			const key = '__express__' + req.method + (req.originalUrl || req.url);
			const cashedRes = mcashe.get(key);
			if(cashedRes){
				console.log('respone from memory cashe');
				try {
					res.send(JSON.parse(cashedRes));
				} catch (error) {
					res.send(cashedRes);
				}
				return;
			} else {
				res.sendResponse = res.send;
				res.send = (body) => {
					mcashe.put(key, body, duration * 1000);
					res.sendResponse(body);
				};
			}
		}
		next();
	};
}