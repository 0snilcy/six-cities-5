import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { userStore } from 'store/user'
import { hotelsStore } from 'store/hotels'

Promise.all([userStore.checkAuth(), hotelsStore.getHotels()]).then(() => {
	render(<App />, document.querySelector(`#root`))
})
