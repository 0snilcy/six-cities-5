import { CardListType } from 'constants'
import React, { useState } from 'react'
import * as pt from 'types'
import { CardPlace } from '../CardPlace'
import cl from 'classnames'

export const ListPlaces = ({ hotels, type = CardListType.MAIN }) => {
	const [activeCard, setActiveCard] = useState()

	return (
		<div
			className={cl('places__list', 'cities__places-list tabs__content', {
				'cities__places-list tabs__content': type === CardListType.MAIN,
				'near-places__list': type === CardListType.ROW,
			})}
		>
			{hotels.map((hotel) => (
				<CardPlace
					id={hotel.id}
					key={hotel.id}
					hotel={hotel}
					onHover={() => setActiveCard(hotel.id)}
					onLeave={() => setActiveCard(null)}
				/>
			))}
		</div>
	)
}

ListPlaces.propTypes = {
	hotels: pt.hotels,
	type: pt._string,
}
