export const ApiActionType = {
	REDIRECT: 'REDIRECT',

	API_LOAD_ERROR: 'API_LOAD_ERROR',
	API_LOAD_START: 'API_LOAD_START',
	API_LOAD_END: 'API_LOAD_END',

	GET_HOTELS: 'GET_HOTELS',
	CHECK_AUTH: 'CHECK_AUTH',
	LOGIN: 'LOGIN',

	SET_FAVORITE: 'SET_FAVORITE',
}

export const ApiActionCreator = {
	apiLoadError: () => ({
		type: ApiActionType.API_LOAD_ERROR,
	}),
	apiLoadStart: () => ({
		type: ApiActionType.API_LOAD_START,
	}),
	apiLoadEnd: () => ({
		type: ApiActionType.API_LOAD_END,
	}),
	getHotels: () => ({
		type: ApiActionType.GET_HOTELS,
	}),
	checkAuth: () => ({
		type: ApiActionType.CHECK_AUTH,
	}),
	login: (payload) => ({
		type: ApiActionType.LOGIN,
		payload,
	}),
	redirect: (payload) => ({
		type: ApiActionType.REDIRECT,
		payload,
	}),
	setFavorite: (payload) => ({
		type: ApiActionType.SET_FAVORITE,
		payload,
	}),
}
