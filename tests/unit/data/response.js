const responses = {
	getViaplayResponse: {
		_embedded: {
			'viaplay:blocks': [
				{
					_embedded: {
						'viaplay:product': {
							content: {
								title: 'alaa',
								production: {
									year:2015
								}
							}
						}
					}
				}
			]
		}
	},
	getMovieId: {
		results: [
			{
				id: 111
			}
		]
	},
	getTrailersIds: {
		results: [
			{
				key: 'aaa'
			},
			{
				key: 'bbb'
			}
		]
	}
};

export default responses;