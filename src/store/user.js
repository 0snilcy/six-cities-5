import { makeAutoObservable, autorun, toJS } from 'mobx'
import { api } from '../services/api'
import { hotelsStore } from './hotels'

class UserStore {
	user = null

	constructor() {
		makeAutoObservable(this)

		this.login = this.login.bind(this)
	}

	_setUser(user) {
		this.user = user
	}

	checkAuth() {
		return api.checkAuth().then((user) => {
			this._setUser(user)
		})
	}

	login(data) {
		return api.login(data).then((user) => {
			this._setUser(user)
			return hotelsStore.getHotels()
		})
	}
}

export const userStore = new UserStore()

autorun(() => {
	console.log('User', toJS(userStore.user))
})
