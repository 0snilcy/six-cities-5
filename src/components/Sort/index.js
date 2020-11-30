import React, { useState } from 'react'
import * as pt from 'types'
import cl from 'classnames'
import { SortOption } from 'constants'

export const Sort = ({ onChange = () => {}, activeSort }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<form className='places__sorting' action='#' method='get'>
			<span className='places__sorting-caption'>Sort by</span>
			<span
				className='places__sorting-type'
				tabIndex={0}
				onClick={() => setIsOpen(!isOpen)}
			>
				Popular
				<svg className='places__sorting-arrow' width='7' height='4'>
					<use xlinkHref='#icon-arrow-select'></use>
				</svg>
			</span>
			<ul
				className={cl('places__options places__options--custom', {
					'places__options--opened': isOpen,
				})}
			>
				{Object.keys(SortOption).map((option) => (
					<li
						className={cl('places__option', {
							'places__option--active': SortOption[option] === activeSort,
						})}
						tabIndex={0}
						key={option}
						onClick={() => {
							onChange(SortOption[option])
							setIsOpen(false)
						}}
					>
						{SortOption[option]}
					</li>
				))}
			</ul>
		</form>
	)
}

Sort.propTypes = {
	onChange: pt.fn,
	activeSort: pt._string,
}
