import React from 'react'
import * as pt from 'types'
import cl from 'classnames'
import { Link } from 'react-router-dom'
import { Route, RATING_VALUE } from 'const'
import { useFavoriteStatus } from 'store/points/data/hooks'

export const CardPlace = ({ hotel, onHover, onLeave }) => {
	const {
		id,
		title,
		type,
		rating,
		is_favorite: isFavorite,
		is_premium: isPremium,
		price,
		preview_image: image,
	} = hotel

	const { setFavorite } = useFavoriteStatus()

	return (
		<article
			className='cities__place-card place-card'
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			{isPremium && (
				<div className='place-card__mark'>
					<span>Premium</span>
				</div>
			)}
			<div className='cities__image-wrapper place-card__image-wrapper'>
				<Link to={`${Route.OFFER}/${id}`}>
					<img
						className='place-card__image'
						src={image}
						width='260'
						height='200'
						alt='Place image'
					/>
				</Link>
			</div>
			<div className='place-card__info'>
				<div className='place-card__price-wrapper'>
					<div className='place-card__price'>
						<b className='place-card__price-value'>&euro;{price}</b>
						<span className='place-card__price-text'>&#47;&nbsp;night</span>
					</div>
					<button
						className={cl(`place-card__bookmark-button`, `button`, {
							'place-card__bookmark-button--active': isFavorite,
						})}
						type='button'
						onClick={() => setFavorite(id, !isFavorite)}
					>
						<svg className='place-card__bookmark-icon' width='18' height='19'>
							<use xlinkHref='#icon-bookmark'></use>
						</svg>
						<span className='visually-hidden'>
							{isFavorite ? `In` : `To`} bookmarks
						</span>
					</button>
				</div>
				<div className='place-card__rating rating'>
					<div className='place-card__stars rating__stars'>
						<span
							style={{
								width: `${rating * (100 / RATING_VALUE)}%`,
							}}
						></span>
						<span className='visually-hidden'>Rating</span>
					</div>
				</div>
				<h2 className='place-card__name'>
					<Link to={`${Route.OFFER}/${id}`}>{title} </Link>
				</h2>
				<p className='place-card__type'>{type}</p>
			</div>
		</article>
	)
}

CardPlace.propTypes = {
	hotel: pt.hotel,
	onHover: pt.fn,
	onLeave: pt.fn,
}
