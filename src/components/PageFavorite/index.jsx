import React from 'react'
import * as pt from 'types'
import { CardFavorite } from 'components/CardFavorite'
import { Header } from 'components/Header'

export const PageFavorite = ({ hotels }) => {
	return (
		<div className='page'>
			<Header />

			<main className='page__main page__main--favorites'>
				<div className='page__favorites-container container'>
					<section className='favorites'>
						<h1 className='favorites__title'>Saved listing</h1>
						<ul className='favorites__list'>
							{Object.entries(
								hotels.reduce((result, hotel) => {
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
}

PageFavorite.propTypes = {
	hotels: pt.hotels,
}
