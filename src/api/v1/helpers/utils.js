import axios from 'axios';

export function toYoutubeUrl( videoId ) {
	return encodeURI( 'https://www.youtube.com/watch?v=' + videoId );
}

export async function getHttpLink(url) {
	const res = await axios.get(url);
	return res.data;
}