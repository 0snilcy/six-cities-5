import { ActionType } from './action'

const initial = {
	city: 'Orel',
	offers: [],
}

export const reducer = (state = initial, action) => {
	switch (action.type) {
		case ActionType.CHANGE_CITY:
			return {
				...state,
				city: action.payload,
			}
		case ActionType.CHANGE_OFFERS:
			return {
				...state,
				offers: action.payload,
			}
		default:
			return state
	}
}
