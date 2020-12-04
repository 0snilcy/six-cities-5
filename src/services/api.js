import axios from 'axios'
import { APIRoute } from 'const'
import { appStore } from 'store/app'
import { store } from '../store/user'

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

		this.http.interceptors.response.use(
			this._onSuccess,
			this._onFail.bind(this)
		)

		this.http.interceptors.request.use((config) => {
			appStore.appendLoading()
			return config
		})
	}

	_onSuccess(response) {
		appStore.ejectLoading()
		return response.data
	}

	_onFail(err) {
		const { response } = err
		appStore.ejectLoading()
		appStore.appendError(response.statusText)

		if (response.status === HttpCode.UNAUTHORIZED) {
			return console.error('UNAUTHORIZED', err)
		}

		throw err
	}

	getHotels() {
		return this.http.get(APIRoute.HOTELS)
	}

	checkAuth() {
		return this.http.get(APIRoute.LOGIN)
	}

	login(data) {
		return this.http.post(APIRoute.LOGIN, data)
	}

	changeFavorite(id, status) {
		return this.http.post(`${APIRoute.FAVORITE}/${id}/${+status}`)
	}
}

export const api = new API()
