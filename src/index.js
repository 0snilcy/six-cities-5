import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { favorites, offers } from 'mock'

render(
	<App offers={offers} favorites={favorites} />,
	document.querySelector(`#root`)
)
