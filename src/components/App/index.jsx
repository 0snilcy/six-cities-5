import React from 'react'
import * as pt from 'types'
import { PageMain } from '../PageMain'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'
import { PageMainEmpty } from 'components/PageMainEmpty'

export const App = ({ hotels }) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					{hotels.length ? <PageMain hotels={hotels} /> : <PageMainEmpty />}
				</Route>

				<Route exact path='/login' component={PageLogin} />

				<Route exact path='/favorites'>
					<PageFavorite hotels={hotels} />
				</Route>

				<Route exact path='/offer/:id'>
					{({ match }) => {
						const hotel = hotels.find(({ id }) => +match.params.id === id)
						if (!hotel) return 404
						return <PageOffer hotel={hotel} />
					}}
				</Route>

				<Route path='*'>404</Route>
			</Switch>
		</BrowserRouter>
	)
}

App.propTypes = {
	hotels: pt.hotels,
}
