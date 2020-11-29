import { Header } from 'components/Header'
import { Map } from 'components/Map'
import { Tabs } from 'components/Tabs'
import React, { useState } from 'react'
import * as pt from 'types'
import { ListPlaces } from '../ListPlaces'

const cities = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf',
]

export const PageMain = ({ hotels }) => {
	const [activeCity, setActiveCity] = useState(cities[0])
	const [filtredHotels, setFiltredHotels] = useState(
		hotels.filter((hotel) => hotel.city.name === activeCity)
	)

	return (
		<div className='page page--gray page--main'>
			<Header />

			<main className='page__main page__main--index'>
				<h1 className='visually-hidden'>Cities</h1>

				<Tabs
					cities={cities}
					activeCity={activeCity}
					onChange={(city) => {
						setActiveCity(city)
						setFiltredHotels(hotels.filter((hotel) => hotel.city.name === city))
					}}
				/>

				<div className='cities'>
					<div className='cities__places-container container'>
						<section className='cities__places places'>
							<h2 className='visually-hidden'>Places</h2>
							<b className='places__found'>
								{filtredHotels.length} places to stay in Amsterdam
							</b>
							<form className='places__sorting' action='#' method='get'>
								<span className='places__sorting-caption'>Sort by</span>
								<span className='places__sorting-type' tabIndex={0}>
									Popular
									<svg className='places__sorting-arrow' width='7' height='4'>
										<use xlinkHref='#icon-arrow-select'></use>
									</svg>
								</span>
								<ul className='places__options places__options--custom places__options--opened'>
									<li
										className='places__option places__option--active'
										tabIndex={0}
									>
										Popular
									</li>
									<li className='places__option' tabIndex={0}>
										Price: low to high
									</li>
									<li className='places__option' tabIndex={0}>
										Price: high to low
									</li>
									<li className='places__option' tabIndex={0}>
										Top rated first
									</li>
								</ul>
							</form>

							<ListPlaces hotels={filtredHotels} />
						</section>
						<div className='cities__right-section'>
							<section className='cities__map map'>
								<Map
									city={filtredHotels[0].city.location}
									locations={filtredHotels.map((hotel) => hotel.location)}
								/>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

PageMain.propTypes = {
	hotels: pt.hotels,
}
