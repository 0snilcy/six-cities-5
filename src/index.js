import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'store/reducer'
import { API } from 'services/api'
import thunk from 'redux-thunk'
import { APIAction } from 'store/api-actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import { UserActionCreator } from 'store/points/user/action'

const api = new API(() => store.dispatch(UserActionCreator.clear()))

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
)

Promise.all([
	store.dispatch(APIAction.getHotels()),
	store.dispatch(APIAction.checkAuth()),
]).then(() => {
	const app = (
		<Provider store={store}>
			<App />
		</Provider>
	)

	render(app, document.querySelector(`#root`))
})
