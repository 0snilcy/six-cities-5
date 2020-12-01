import React from 'react'
import * as pt from 'types'
import { FormReview } from 'components/FormReview'
import { RATING_VALUE } from 'const'

export const ListReviews = ({ reviews = [], onSubmitReview }) => {
	return (
		<section className='property__reviews reviews'>
			<h2 className='reviews__title'>
				Reviews &middot;{' '}
				<span className='reviews__amount'>{reviews.length}</span>
			</h2>
			<ul className='reviews__list'>
				{reviews.map((review, id) => {
					return (
						<li className='reviews__item' key={id}>
							<div className='reviews__user user'>
								<div className='reviews__avatar-wrapper user__avatar-wrapper'>
									<img
										className='reviews__avatar user__avatar'
										src={review.avatar}
										width='54'
										height='54'
										alt='Reviews avatar'
									/>
								</div>
								<span className='reviews__user-name'>{review.name}</span>
							</div>
							<div className='reviews__info'>
								<div className='reviews__rating rating'>
									<div className='reviews__stars rating__stars'>
										<span
											style={{
												width: `${review.rating * (100 / RATING_VALUE)}%`,
											}}
										></span>
										<span className='visually-hidden'>Rating</span>
									</div>
								</div>
								<p className='reviews__text'>{review.text}</p>
								<time className='reviews__time' dateTime={review.date}>
									April 2019
								</time>
							</div>
						</li>
					)
				})}
			</ul>

			<FormReview onSubmit={onSubmitReview} />
		</section>
	)
}

ListReviews.propTypes = {
	reviews: pt.comments,
	onSubmitReview: pt.fn,
}
