import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUser } from 'store/points/user/hooks'
import * as pt from 'types'
import { Route as Path } from 'const'

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
