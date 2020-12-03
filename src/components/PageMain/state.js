import { useMemo, useState } from 'react'
import { SortOption } from 'const'
import { useHotels } from 'store/points/hotels/hooks'

const usePageMainState = () => {
	const { hotels } = useHotels()

	const [activeSort, setActiveSort] = useState(SortOption.POPULAR)
	const [activeCardId, setActiveCardId] = useState()

	const cities = useMemo(
		() => [...new Set(hotels.map(({ city }) => city.name))],
		[]
	)

	const [activeCity, setActiveCity] = useState(cities[0])
	const cityHotels = useMemo(
		() => hotels.filter(({ city }) => city.name === activeCity),
		[activeCity, hotels]
	)

	const activeHotels = useMemo(() => {
		const copy = [...cityHotels]

		switch (activeSort) {
			case SortOption.POPULAR:
				return copy

			case SortOption.LOW:
				return copy.sort((a, b) => a.price - b.price)

			case SortOption.HIGH:
				return copy.sort((a, b) => b.price - a.price)

			case SortOption.RATING:
				return copy.sort((a, b) => b.rating - a.rating)
		}

		return copy
	}, [cityHotels, activeSort])

	return {
		activeHotels,

		activeCardId,
		setActiveCardId,

		activeSort,
		setActiveSort,

		activeCity,
		setActiveCity,
		cities,
	}
}

export default usePageMainState
