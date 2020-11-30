import React from 'react'
import * as pt from 'types'
import cl from 'classnames'
import { RATING_VALUE } from 'constants'

export const CardFavorite = ({ hotel }) => {
	const {
		title,
		type,
		rating,
		is_favorite: isFavorite,
		price,
		preview_image: smallImage,
	} = hotel
	return (
		<article className='favorites__card place-card'>
			<div className='favorites__image-wrapper place-card__image-wrapper'>
				<a href='#'>
					<img
						className='place-card__image'
						src={smallImage}
						width='150'
						height='110'
						alt='Place image'
					/>
				</a>
			</div>
			<div className='favorites__card-info place-card__info'>
				<div className='place-card__price-wrapper'>
					<div className='place-card__price'>
						<b className='place-card__price-value'>€{price}</b>
						<span className='place-card__price-text'>/&nbsp;night</span>
					</div>
					<button
						className={cl(`place-card__bookmark-button`, `button`, {
							'place-card__bookmark-button--active': isFavorite,
						})}
						type='button'
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
					<a href='#'>{title}</a>
				</h2>
				<p className='place-card__type'>{type}</p>
			</div>
		</article>
	)
}

CardFavorite.propTypes = {
	hotel: pt.hotel,
}
