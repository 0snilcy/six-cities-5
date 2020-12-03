import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { Provider } from 'react-redux'
import { store } from 'store/reducer'
import { hotelsStoreAPI } from 'store/points/hotels'
import { userStoreAPI } from 'store/points/user'

Promise.all([
	store.dispatch(hotelsStoreAPI.getHotels()),
	store.dispatch(userStoreAPI.checkAuth()),
]).then(() => {
	const app = (
		<Provider store={store}>
			<App />
		</Provider>
	)

	render(app, document.querySelector(`#root`))
})
