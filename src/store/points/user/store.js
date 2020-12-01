export const userStoreInitial = null

export const USER_NAMESPACE = 'USER'

export const userSelector = {
	data: (store) => store[USER_NAMESPACE],
}
