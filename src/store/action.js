export const ActionType = {
	CHANGE_CITY: 'CHANGE_CITY',
	CHANGE_OFFERS: 'CHANGE_OFFERS',
}

export const ActionCreator = {
	changeCity: (city) => ({
		type: ActionType.CHANGE_CITY,
		payload: city,
	}),
	changeOffers: (offers) => ({
		type: ActionType.CHANGE_OFFERS,
		payload: offers,
	}),
}
