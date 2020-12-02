import { DataActionType } from './action'
import { dataStoreInitial } from './store'
export { DATA_NAMESPACE } from './store'

export const reducer = (state = dataStoreInitial, action) => {
	switch (action.type) {
		case DataActionType.CHANGE_CITY:
			return {
				...state,
				city: action.payload,
			}

		case DataActionType.CHANGE_HOTELS:
			return {
				...state,
				hotels: action.payload,
			}

		case DataActionType.CLEAR_ACTIVE_HOTEL:
			return {
				...state,
				activeHotel: {},
			}

		case DataActionType.CHANGE_HOTEL_COMMENTS:
			return {
				...state,
				activeHotel: {
					...state.activeHotel,
					comments: action.payload,
				},
			}

		case DataActionType.CHANGE_HOTEL_NEARBY:
			return {
				...state,
				activeHotel: {
					...state.activeHotel,
					nearby: action.payload.map(({ id }) => id),
				},
			}

		case DataActionType.CHANGE_FAVORITE:
			return {
				...state,
				hotels: state.hotels.map((hotel) =>
					hotel.id === action.payload.id ? action.payload : hotel
				),
			}
		default:
			return state
	}
}
