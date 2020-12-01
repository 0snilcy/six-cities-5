import { userSelector } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { UserActionCreator } from './action'
import { APIAction } from 'store/api-actions'

export const useUser = () => {
	const dispatch = useDispatch()
	const user = useSelector(userSelector.data)
	return {
		user,
		login: (login) => dispatch(APIAction.login(login)),
		clearUser: () => dispatch(UserActionCreator.clear()),
	}
}
