import { useMemo, useState } from 'react'
import { SortOption } from 'constants'

const usePageMainState = (hotels) => {
	const cities = useMemo(
		() => [...new Set(hotels.map(({ city }) => city.name))],
		[hotels]
	)

	const [activeCity, setActiveCity] = useState(cities[0])
	const [activeSort, setActiveSort] = useState(SortOption.POPULAR)
	const [activeCardId, setActiveCardId] = useState()

	const activeHotels = useMemo(() => {
		const filtredHotels = hotels.filter(
			(hotel) => hotel.city.name === activeCity
		)

		switch (activeSort) {
			case SortOption.POPULAR:
				return filtredHotels

			case SortOption.LOW:
				return filtredHotels.sort((a, b) => a.price - b.price)

			case SortOption.HIGH:
				return filtredHotels.sort((a, b) => b.price - a.price)

			case SortOption.RATING:
				return filtredHotels.sort((a, b) => b.rating - a.rating)
		}

		return filtredHotels
	}, [activeCity, activeSort])

	return {
		cities,
		activeHotels,

		activeCardId,
		setActiveCardId,

		activeCity,
		setActiveCity,

		activeSort,
		setActiveSort,
	}
}

export default usePageMainState
