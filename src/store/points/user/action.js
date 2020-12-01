export const UserActionType = {
	USER_CHANGE: 'USER_CHANGE',
}

export const UserActionCreator = {
	set: (auth) => ({
		type: UserActionType.USER_CHANGE,
		payload: auth,
	}),
	clear: () => ({
		type: UserActionType.USER_CHANGE,
		payload: null,
	}),
}
