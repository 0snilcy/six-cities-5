import React from 'react'
import { PageMain } from '../PageMain'
import { Router, Switch, Route } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'
import { PrivateRoute } from 'components/PrivateRoute'
import { browserHistory } from 'services/history'

export const App = () => {
	return (
		<Router history={browserHistory}>
			<Switch>
				<Route exact path='/'>
					<PageMain />
				</Route>

				<Route exact path='/login' component={PageLogin} />

				<PrivateRoute exact path='/favorites'>
					<PageFavorite />
				</PrivateRoute>

				<Route exact path='/offer/:id'>
					{({ match }) => <PageOffer activeHotelId={+match.params.id} />}
				</Route>

				<Route path='*'>404</Route>
			</Switch>
		</Router>
	)
}
