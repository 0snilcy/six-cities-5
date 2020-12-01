import { userSelector } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { UserActionCreator } from './action'

export const useUser = () => {
	const dispatch = useDispatch()
	const user = useSelector(userSelector.data)
	return {
		user,
		setUser: (response) => dispatch(UserActionCreator.set(response)),
		clearUser: () => dispatch(UserActionCreator.clear()),
	}
}
