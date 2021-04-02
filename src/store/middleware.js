import { ApiActionType } from './points/api/action'
import { browserHistory } from 'services/history'

export const redirectMiddleware = (_) => (next) => (action) => {
	if (action.type === ApiActionType.REDIRECT) {
		browserHistory.push(action.payload)
	}

	return next(action)
}
