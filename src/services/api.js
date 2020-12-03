import axios from 'axios'

const BACKEND_URL = `https://5.react.pages.academy/six-cities`
const REQUEST_TIMEOUT = 5000

const HttpCode = {
	UNAUTHORIZED: 401,
}

class API {
	constructor() {
		this.http = axios.create({
			baseURL: BACKEND_URL,
			timeout: REQUEST_TIMEOUT,
			withCredentials: true,
		})

		this.http.interceptors.response.use(this.onSuccess, this.onFail.bind(this))
	}

	onSuccess(response) {
		return response
	}

	onFail(err) {
		const { response } = err

		if (response.status === HttpCode.UNAUTHORIZED) {
			return console.error('UNAUTHORIZED', err)
		}

		throw err
	}
}

export const api = new API()
