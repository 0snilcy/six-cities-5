import React, { memo } from 'react'
import cl from 'classnames'
import * as pt from 'types'

export const Tabs = memo(function Tabs({ activeCity, cities, setActiveCity }) {
	return (
		<div className='tabs'>
			<section className='locations container'>
				<ul className='locations__list tabs__list'>
					{cities.map((city) => (
						<li className='locations__item' key={city}>
							<a
								className={cl('locations__item-link tabs__item', {
									'tabs__item--active': city === activeCity,
								})}
								href='#'
								onClick={(evt) => {
									evt.preventDefault()
									setActiveCity(city)
								}}
							>
								<span>{city}</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
})

Tabs.propTypes = {
	activeCity: pt.string,
	cities: pt.stringArr,
	setActiveCity: pt.fn,
}
