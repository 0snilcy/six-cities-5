import { combineEpics, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { mergeMap, map, catchError, endWith, tap } from 'rxjs/operators'

import { Route, APIRoute } from 'const'
import { DataActionCreator } from './points/data/action'
import { UserActionCreator } from './points/user/action'
import { ApiActionCreator, ApiActionType } from './points/api/action'

const getEpic = ({ actionType, cb, onSuccess, afterSucces }) => (
	action$,
	_,
	{ api }
) =>
	action$.pipe(
		ofType(actionType),
		mergeMap((action) =>
			from(cb(api, action.payload)).pipe(
				map(({ data }) => onSuccess(data)),
				afterSucces ? endWith(afterSucces) : tap(),
				catchError(() => of(ApiActionCreator.apiLoadError()))
			)
		)
	)

export const ApiEpic = [
	getEpic({
		actionType: ApiActionType.GET_HOTELS,
		cb: (api) => api.http.get(APIRoute.HOTELS),
		onSuccess: DataActionCreator.changeHotels,
	}),
	getEpic({
		actionType: ApiActionType.CHECK_AUTH,
		cb: (api) => api.http.get(APIRoute.LOGIN),
		onSuccess: UserActionCreator.set,
	}),
	getEpic({
		actionType: ApiActionType.LOGIN,
		cb: (api, payload) => api.http.post(APIRoute.LOGIN, payload),
		onSuccess: UserActionCreator.set,
		afterSucces: ApiActionCreator.redirect(Route.FAVORITES),
	}),
	getEpic({
		actionType: ApiActionType.SET_FAVORITE,
		cb: (api, payload) =>
			api.http.post(`${APIRoute.FAVORITE}/${payload.id}/${+payload.status}`),
		onSuccess: DataActionCreator.changeFavoriteHotel,
	}),
]

export const rootEpic = combineEpics(...ApiEpic)
