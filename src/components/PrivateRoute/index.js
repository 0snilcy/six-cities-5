import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import * as pt from 'types'
import { Route as Path } from 'const'
import { useUser } from 'services/api'

export function PrivateRoute({ children, ...rest }) {
	const { user } = useUser()

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: Path.LOGIN,
							state: { from: location },
						}}
					/>
				)
			}
		/>
	)
}

PrivateRoute.propTypes = {
	children: pt.component,
	exact: pt.bool,
	path: pt.string,
}
