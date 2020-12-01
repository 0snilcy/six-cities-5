export const DataActionType = {
	CHANGE_CITY: 'CHANGE_CITY',
	CHANGE_HOTELS: 'CHANGE_HOTELS',
	CHANGE_AUTH_STATE: 'CHANGE_AUTH_STATE',
}

export const DataActionCreator = {
	changeCity: (city) => ({
		type: DataActionType.CHANGE_CITY,
		payload: city,
	}),
	changeHotels: (hotels) => ({
		type: DataActionType.CHANGE_HOTELS,
		payload: hotels,
	}),
}
