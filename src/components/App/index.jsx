import React from 'react'
import { PageMain } from '../PageMain'
import { Router, Switch, Route } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'
import { PrivateRoute } from 'components/PrivateRoute'
import { browserHistory } from 'services/history'
import { Spinner } from 'components/Spinner'

export const App = () => {
	return (
		<>
			<Spinner />
			<Router history={browserHistory}>
				<Switch>
					<Route exact path='/'>
						<PageMain />
					</Route>

					<PrivateRoute exact path='/favorites'>
						<PageFavorite />
					</PrivateRoute>

					<Route exact path='/login' component={PageLogin} />

					<Route exact path='/offer/:id'>
						{({ match }) => <PageOffer hotelId={+match.params.id} />}
					</Route>

					<Route path='*'>404</Route>
				</Switch>
			</Router>
		</>
	)
}
