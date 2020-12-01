import { combineReducers } from 'redux'
import { reducer as dataReducer, DATA_NAMESPACE } from './points/data/reducer'
import { reducer as userReducer, USER_NAMESPACE } from './points/user/reducer'

export default combineReducers({
	[DATA_NAMESPACE]: dataReducer,
	[USER_NAMESPACE]: userReducer,
})
