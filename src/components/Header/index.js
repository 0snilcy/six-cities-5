import { Route } from 'const'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from 'store/points/user/hooks'

export const Header = memo(function Header() {
	const { user } = useUser()

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__left'>
						<Link className='header__logo-link' to={Route.MAIN}>
							<img
								className='header__logo'
								src='img/logo.svg'
								alt='6 cities logo'
								width='81'
								height='41'
							/>
						</Link>
					</div>
					<nav className='header__nav'>
						<ul className='header__nav-list'>
							<li className='header__nav-item user'>
								<Link
									className='header__nav-link header__nav-link--profile'
									to={user ? Route.FAVORITES : Route.LOGIN}
								>
									<div className='header__avatar-wrapper user__avatar-wrapper'>
										{user && user.avatar_url && (
											<img
												src={user.avatar_url}
												style={{ borderRadius: '50%' }}
											/>
										)}
									</div>
									{user ? (
										<span className='header__user-name user__name'>
											{user.name}
										</span>
									) : (
										<span className='header__login'>Sign in</span>
									)}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
})

Header.propTypes = {}
