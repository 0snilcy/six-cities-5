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
		default:
			return state
	}
}
