import { CardListType } from 'const'
import React, { memo, useCallback } from 'react'
import * as pt from 'types'
import { CardPlace } from '../CardPlace'
import cl from 'classnames'

export const ListPlaces = memo(function ListPlaces({
	hotels,
	type = CardListType.MAIN,
	onCardHover,
}) {
	const onHover = useCallback(onCardHover, [])
	const onLeave = useCallback(() => onCardHover(null), [])

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
					onHover={onHover}
					onLeave={onLeave}
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
