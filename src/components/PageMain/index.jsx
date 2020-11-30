import { Header } from 'components/Header'
import { Map } from 'components/Map'
import { Sort } from 'components/Sort'
import { Tabs } from 'components/Tabs'
import React from 'react'
import * as pt from 'types'
import { ListPlaces } from '../ListPlaces'
import usePageMainState from './state'

export const PageMain = ({ hotels }) => {
	const {
		cities,
		activeHotels,

		activeCardId,
		setActiveCardId,

		activeCity,
		setActiveCity,

		activeSort,
		setActiveSort,
	} = usePageMainState(hotels)

	return (
		<div className='page page--gray page--main'>
			<Header />

			<main className='page__main page__main--index'>
				<h1 className='visually-hidden'>Cities</h1>

				<Tabs
					cities={cities}
					activeCity={activeCity}
					onChange={setActiveCity}
				/>

				<div className='cities'>
					<div className='cities__places-container container'>
						<section className='cities__places places'>
							<h2 className='visually-hidden'>Places</h2>
							<b className='places__found'>
								{activeHotels.length} places to stay in Amsterdam
							</b>

							<Sort onChange={setActiveSort} activeSort={activeSort} />
							<ListPlaces hotels={activeHotels} onCardHover={setActiveCardId} />
						</section>
						<div className='cities__right-section'>
							<section className='cities__map map'>
								{activeHotels.length && (
									<Map
										city={activeHotels[0].city.location}
										locations={activeHotels.map((hotel) => ({
											location: hotel.location,
											active: activeCardId === hotel.id,
										}))}
									/>
								)}
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
