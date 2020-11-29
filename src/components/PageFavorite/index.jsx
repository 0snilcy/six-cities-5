import React from 'react'
import * as pt from 'types'
import { CardFavorite } from 'components/CardFavorite'
import { Header } from 'components/Header'

export const PageFavorite = ({ favoriteLocations }) => {
	return (
		<div className='page'>
			<Header />

			<main className='page__main page__main--favorites'>
				<div className='page__favorites-container container'>
					<section className='favorites'>
						<h1 className='favorites__title'>Saved listing</h1>
						<ul className='favorites__list'>
							{favoriteLocations.map(({ city, offers }) => {
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
											{offers.map((offer, id) => (
												<CardFavorite offer={offer} key={offer.title + id} />
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
	favoriteLocations: pt.favoriteLocations,
}
