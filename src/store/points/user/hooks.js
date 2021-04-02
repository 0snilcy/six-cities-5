import { userSelector } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { UserActionCreator } from './action'
import { ApiActionCreator } from '../api/action'

export const useUser = () => {
	const dispatch = useDispatch()
	const user = useSelector(userSelector.data)
	return {
		user,
		login: (login) => dispatch(ApiActionCreator.login(login)),
		clearUser: () => dispatch(UserActionCreator.clear()),
	}
}
