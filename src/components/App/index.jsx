import React from 'react'
import * as pt from 'types'
import { PageMain } from '../PageMain'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'

export const App = ({ hotels }) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<PageMain hotels={hotels} />
				</Route>
				<Route exact path='/login' component={PageLogin} />
				<Route exact path='/favorites'>
					<PageFavorite hotels={hotels} />
				</Route>
				<Route exact path='/offer/:id'>
					{({ match }) => {
						const hotel = hotels.find(({ id }) => match.params.id === id)
						if (!hotel) return <Redirect to='/404' />
						return <PageOffer offer={hotel} />
					}}
				</Route>
				<Route path='*'>404</Route>
				<Route path='/404'>404</Route>
			</Switch>
		</BrowserRouter>
	)
}

App.propTypes = {
	hotels: pt.hotels,
}