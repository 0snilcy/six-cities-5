import React from 'react'
import * as pt from 'types'
import { PageMain } from '../PageMain'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'

export const App = ({ offers, favorites }) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<PageMain offers={offers} />
				</Route>

				<Route exact path='/login' component={PageLogin} />

				<Route exact path='/favorites'>
					<PageFavorite favoriteLocations={favorites} />
				</Route>

				<Route exact path='/offer/:id'>
					{({ match }) => <PageOffer offer={offers[match.params.id]} />}
				</Route>

				<Route path='*'>404</Route>
			</Switch>
		</BrowserRouter>
	)
}

App.propTypes = {
	offers: pt.offers,
	favorites: pt.favoriteLocations,
}
