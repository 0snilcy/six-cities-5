import { APIRoute, Route } from 'const'
import { browserHistory } from 'services/history'
import { DataActionCreator } from './points/data/action'
import { UserActionCreator } from './points/user/action'

export const APIAction = {
	getHotels: () => (dispatch, _, api) => {
		api.http.get(APIRoute.HOTELS).then(({ data }) => {
			dispatch(DataActionCreator.changeHotels(data))
		})
	},

	checkAuth: () => (dispatch, _, api) =>
		api.http
			.get(APIRoute.LOGIN)
			.then(({ data }) => dispatch(UserActionCreator.set(data)))
			.catch(() => console.log('Not auth')),

	login: (login) => (dispatch, _, api) =>
		api.http.post(APIRoute.LOGIN, login).then(({ data }) => {
			dispatch(UserActionCreator.set(data))
			browserHistory.push(Route.FAVORITES)
		}),
}
