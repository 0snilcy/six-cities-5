import { userStore } from './reducer'

const getUser = (store) => store[userStore.name]

export const userSelector = {
	getUser,
}
