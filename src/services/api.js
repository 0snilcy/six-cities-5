import axios from 'axios'

const BACKEND_URL = `https://5.react.pages.academy/six-cities`
const REQUEST_TIMEOUT = 5000

const HttpCode = {
	UNAUTHORIZED: 401,
}

export class API {
	constructor(onUnauthorized) {
		this.http = axios.create({
			baseURL: BACKEND_URL,
			timeout: REQUEST_TIMEOUT,
			withCredentials: true,
		})

		this.onUnauthorized = onUnauthorized
		this.http.interceptors.response.use(this.onSuccess, this.onFail.bind(this))
	}

	onSuccess(response) {
		console.log('response', response)
		return response
	}

	onFail(err) {
		const { response } = err

		if (response.status === HttpCode.UNAUTHORIZED) {
			this.onUnauthorized()
			throw err
		}

		console.log('err', err)
		throw err
	}
}
