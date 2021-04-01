import axios from 'axios'
import { APIRoute, Route } from 'const'
import useSWR, { mutate } from 'swr'
import { browserHistory } from './history'

const BACKEND_URL = `https://6.react.pages.academy/six-cities`
const REQUEST_TIMEOUT = 5000

const http = axios.create({
	baseURL: BACKEND_URL,
	timeout: REQUEST_TIMEOUT,
	withCredentials: true,
})

http.interceptors.response.use(
	({ data }) => data,
	({ response }) => console.log(response)
)

export const fetcher = (url) => http.get(url)

export const useHotels = () => {
	const { data } = useSWR(APIRoute.HOTELS, {
		initialData: [],
	})

	return {
		hotels: data,
	}
}

export const useUser = () => {
	const { data } = useSWR(APIRoute.LOGIN)
	// console.log('useUser', data)

	return {
		user: data,
		login: API.login,
	}
}

export const API = {
	login(data) {
		return http.post(APIRoute.LOGIN, data).then((res) => {
			mutate(APIRoute.LOGIN, res, false)
			mutate(APIRoute.HOTELS, API.getHotels).then(() =>
				browserHistory.push(Route.FAVORITES)
			)
		})
	},

	checkAuth() {
		return http
			.get(APIRoute.LOGIN)
			.then((res) => mutate(APIRoute.LOGIN, res, false))
	},

	getHotels() {
		return http
			.get(APIRoute.HOTELS)
			.then((res) => mutate(APIRoute.HOTELS, res, false))
	},

	changeFavorite(id, status) {
		return http
			.post(`${APIRoute.FAVORITE}/${id}/${+status}`)
			.then((hotel) =>
				mutate(
					APIRoute.HOTELS,
					(hotels) => hotels.map((el) => (el.id === hotel.id ? hotel : el)),
					false
				)
			)
	},

	sendComment(id, comment) {
		return http.post(`${APIRoute.COMMENTS}/${id}`, comment)
	},

	getComments(id) {
		return http.get(`${APIRoute.COMMENTS}/${id}`)
	},

	getNearby(id) {
		return http.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
	},
}
