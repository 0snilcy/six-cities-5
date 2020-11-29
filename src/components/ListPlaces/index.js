import { CardListType } from 'constants'
import React, { useState } from 'react'
import * as pt from 'types'
import { CardPlace } from '../CardPlace'
import cl from 'classnames'

export const ListPlaces = ({ offers, type = CardListType.MAIN }) => {
	const [activeCard, setActiveCard] = useState()

	return (
		<div
			className={cl('places__list', 'cities__places-list tabs__content', {
				'cities__places-list tabs__content': type === CardListType.MAIN,
				'near-places__list': type === CardListType.ROW,
			})}
		>
			{offers.map((offer) => (
				<CardPlace
					id={offer.id}
					offer={offer}
					key={offer.id}
					onHover={() => setActiveCard(offer.id)}
					onLeave={() => setActiveCard(null)}
				/>
			))}
		</div>
	)
}

ListPlaces.propTypes = {
	offers: pt.offers,
	type: pt.listTypes,
}
