import { Route } from 'const'
import { useDispatch, useSelector } from 'react-redux'
import { browserHistory } from 'services/history'
import { userStore, userStoreAPI } from './reducer'
import { userSelector } from './selectors'

export const useUser = () => {
	const dispatch = useDispatch()
	const user = useSelector(userSelector.getUser)

	return {
		user,
		login: (login) => {
			dispatch(userStoreAPI.login(login)).then(() =>
				browserHistory.push(Route.FAVORITES)
			)
		},
		clearUser: () => dispatch(userStore.actions.clearUser()),
	}
}
