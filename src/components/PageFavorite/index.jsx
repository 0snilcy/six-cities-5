import React, { useMemo } from 'react'
import { CardFavorite } from 'components/CardFavorite'
import { Header } from 'components/Header'
import { observer } from 'mobx-react-lite'
import { hotelsStore } from 'store/hotels'

export const PageFavorite = observer(function PageFavorite() {
	const { hotels } = hotelsStore
	const favoriteHotels = useMemo(() => {
		return hotels.filter(({ is_favorite }) => is_favorite)
	}, [hotels])

	return (
		<div className='page'>
			<Header />

			<main className='page__main page__main--favorites'>
				<div className='page__favorites-container container'>
					{favoriteHotels.length ? (
						<section className='favorites'>
							<h1 className='favorites__title'>Saved listing</h1>
							<ul className='favorites__list'>
								{Object.entries(
									favoriteHotels.reduce((result, hotel) => {
										const city = hotel.city.name
										const cityHotels = result[city]

										result[city] = cityHotels ? [...cityHotels, hotel] : [hotel]
										return result
									}, {})
								).map(([city, cityHotels]) => {
									return (
										<li className='favorites__locations-items' key={city}>
											<div className='favorites__locations locations locations--current'>
												<div className='locations__item'>
													<a className='locations__item-link' href='#'>
														<span>{city}</span>
													</a>
												</div>
											</div>
											<div className='favorites__places'>
												{cityHotels.map((hotel) => (
													<CardFavorite hotel={hotel} key={hotel.id} />
												))}
											</div>
										</li>
									)
								})}
							</ul>
						</section>
					) : (
						<section className='favorites favorites--empty'>
							<h1 className='visually-hidden'>Favorites (empty)</h1>
							<div className='favorites__status-wrapper'>
								<b className='favorites__status'>Nothing yet saved.</b>
								<p className='favorites__status-description'>
									Save properties to narrow down search or plan yor future
									trips.
								</p>
							</div>
						</section>
					)}
				</div>
			</main>

			<footer className='footer container'>
				<a className='footer__logo-link' href='main.html'>
					<img
						className='footer__logo'
						src='img/logo.svg'
						alt='6 cities logo'
						width='64'
						height='33'
					/>
				</a>
			</footer>
		</div>
	)
})

PageFavorite.propTypes = {}
