import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'store/reducer'
import { API } from 'services/api'
import { composeWithDevTools } from 'redux-devtools-extension'
import { UserActionCreator } from 'store/points/user/action'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from 'store/epics'
import { ApiActionCreator } from 'store/points/api/action'
import { redirectMiddleware } from 'store/middleware'

const api = new API(() => store.dispatch(UserActionCreator.clear()))
const epicMiddleware = createEpicMiddleware({
	dependencies: {
		api,
	},
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(epicMiddleware, redirectMiddleware))
)

epicMiddleware.run(rootEpic)

Promise.all([
	store.dispatch(ApiActionCreator.getHotels()),
	store.dispatch(ApiActionCreator.checkAuth()),
]).then(() => {
	const app = (
		<Provider store={store}>
			<App />
		</Provider>
	)

	render(app, document.querySelector(`#root`))
})
