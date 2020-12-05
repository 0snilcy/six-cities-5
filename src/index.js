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
