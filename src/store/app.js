import { autorun, makeAutoObservable, runInAction } from 'mobx'

class AppStore {
	loading = false
	error = null
	_loadingCounter = 0

	constructor() {
		makeAutoObservable(this)
	}

	appendLoading() {
		this.loading = true
		this._loadingCounter++
	}

	ejectLoading() {
		this._loadingCounter--
		this.loading = this._loadingCounter > 0
	}

	appendError(message) {
		this.error = message
		setTimeout(() => {
			runInAction(() => (this.error = null))
		}, 2000)
	}
}

export const appStore = new AppStore()

autorun(() => {
	console.log('Loading', appStore.loading, appStore._loadingCounter)
})

autorun(() => {
	console.log('Error', appStore.error)
})
