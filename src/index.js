import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from 'store/reducer'
import { ActionCreator } from 'store/action'

fetch('https://5.react.pages.academy/six-cities/hotels')
	.then((response) => response.json())
	.then((hotels) => {
		const store = createStore(
			reducer,
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: (f) => f
		)

		store.dispatch(ActionCreator.changeOffers(hotels))

		const app = (
			<Provider store={store}>
				<App hotels={hotels} />
			</Provider>
		)

		render(app, document.querySelector(`#root`))
	})
