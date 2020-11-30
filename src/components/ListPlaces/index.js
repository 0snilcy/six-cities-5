import { CardListType } from 'constants'
import React, { memo } from 'react'
import * as pt from 'types'
import { CardPlace } from '../CardPlace'
import cl from 'classnames'

export const ListPlaces = memo(function ListPlaces({
	hotels,
	type = CardListType.MAIN,
	onCardHover,
}) {
	return (
		<div
			className={cl('places__list', 'cities__places-list tabs__content', {
				'cities__places-list tabs__content': type === CardListType.MAIN,
				'near-places__list': type === CardListType.ROW,
			})}
		>
			{hotels.map((hotel) => (
				<CardPlace
					key={hotel.id}
					hotel={hotel}
					onHover={() => onCardHover(hotel.id)}
					onLeave={() => onCardHover(null)}
				/>
			))}
		</div>
	)
})

ListPlaces.propTypes = {
	hotels: pt.hotels,
	type: pt._string,
	onCardHover: pt.fn,
}
