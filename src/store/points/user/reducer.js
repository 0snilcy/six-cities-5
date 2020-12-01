import { UserActionType } from './action'
import { userStoreInitial } from './store'
export { USER_NAMESPACE } from './store'

export const reducer = (state = userStoreInitial, action) => {
	switch (action.type) {
		case UserActionType.USER_CHANGE:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}
