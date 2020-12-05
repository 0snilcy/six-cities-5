import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { SWRConfig } from 'swr'
import { API, fetcher } from 'services/api'

Promise.all([API.checkAuth(), API.getHotels()]).then(() => {
	const app = (
		<SWRConfig
			value={{
				fetcher,
				revalidateOnFocus: false,
				revalidateOnMount: false,
				// onSuccess: console.log,
				// onError: console.log,
			}}
		>
			<App />
		</SWRConfig>
	)
	render(app, document.querySelector(`#root`))
})

if ('serviceWorker' in navigator) {
	// Register a service worker hosted at the root of the
	// site using the default scope.
	navigator.serviceWorker.register('/sw.js').then(
		function (registration) {
			console.log('Service worker registration succeeded:', registration)
		},
		function (error) {
			console.log('Service worker registration failed:', error)
		}
	)
} else {
	console.log('Service workers are not supported.')
}
