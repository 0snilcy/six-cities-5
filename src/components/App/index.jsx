import React from 'react'
import { PageMain } from '../PageMain'
import { Router, Switch, Route } from 'react-router-dom'
import { PageLogin } from 'components/PageLogin'
import { PageFavorite } from 'components/PageFavorite'
import { PageOffer } from 'components/PageOffer'
import { PageMainEmpty } from 'components/PageMainEmpty'
import { useHotels } from 'store/points/data/hooks'
import { PrivateRoute } from 'components/PrivateRoute'
import { browserHistory } from 'services/history'

export const App = () => {
	const { hotels } = useHotels()

	return (
		<Router history={browserHistory}>
			<Switch>
				<Route exact path='/'>
					{hotels.length ? <PageMain hotels={hotels} /> : <PageMainEmpty />}
				</Route>

				<Route exact path='/login' component={PageLogin} />

				<PrivateRoute exact path='/favorites'>
					<PageFavorite hotels={hotels} />
				</PrivateRoute>

				<Route exact path='/offer/:id'>
					{({ match }) => {
						const hotel = hotels.find(({ id }) => +match.params.id === id)
						if (!hotel) return 404
						return <PageOffer hotel={hotel} />
					}}
				</Route>

				<Route path='*'>404</Route>
			</Switch>
		</Router>
	)
}
