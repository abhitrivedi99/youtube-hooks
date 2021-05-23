import axios from 'axios'

const KEY = 'AIzaSyCWapQVPJLT2jFIpttdsjKpKg8oJBHVGcI'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY,
	},
})
