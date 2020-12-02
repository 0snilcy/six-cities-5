import { APIRoute, Route } from 'const'
import { browserHistory } from 'services/history'
import { DataActionCreator } from './points/data/action'
import { UserActionCreator } from './points/user/action'

export const APIAction = {
	getHotels: () => (dispatch, _, api) =>
		api.http.get(APIRoute.HOTELS).then(({ data }) => {
			dispatch(DataActionCreator.changeHotels(data))
		}),

	getComments: (id) => (dispatch, _, api) =>
		api.http.get(`${APIRoute.COMMENTS}/${id}`).then(({ data }) => {
			dispatch(DataActionCreator.changeHotelComments(data))
		}),

	sendComment: (id, data) => (dispatch, _, api) =>
		api.http
			.post(`${APIRoute.COMMENTS}/${id}`, data)
			.then(({ data: updatedComments }) => {
				dispatch(DataActionCreator.changeHotelComments(updatedComments))
			}),

	getNearby: (id) => (dispatch, _, api) =>
		api.http
			.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
			.then(({ data: nearbyHotels }) => {
				dispatch(DataActionCreator.changeNearbyHotels(nearbyHotels))
			}),

	setFavorite: (id, status) => (dispatch, _, api) =>
		api.http
			.post(`${APIRoute.FAVORITE}/${id}/${+status}`)
			.then(({ data: favoriteHotel }) => {
				dispatch(DataActionCreator.changeFavoriteHotel(favoriteHotel))
			}),

	checkAuth: () => (dispatch, _, api) =>
		api.http
			.get(APIRoute.LOGIN)
			.then(({ data }) => dispatch(UserActionCreator.set(data)))
			.catch(() => {}),

	login: (login) => (dispatch, _, api) =>
		api.http.post(APIRoute.LOGIN, login).then(({ data }) => {
			dispatch(UserActionCreator.set(data))
			browserHistory.push(Route.FAVORITES)
		}),
}
