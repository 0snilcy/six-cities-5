import { useMemo, useState } from 'react'
import { SortOption } from 'const'
import { useHotels } from 'store/points/data/hooks'

const usePageMainState = () => {
	const [activeSort, setActiveSort] = useState(SortOption.POPULAR)
	const [activeCardId, setActiveCardId] = useState()
	const { cityHotels } = useHotels()

	const activeHotels = useMemo(() => {
		switch (activeSort) {
			case SortOption.POPULAR:
				return cityHotels

			case SortOption.LOW:
				return cityHotels.sort((a, b) => a.price - b.price)

			case SortOption.HIGH:
				return cityHotels.sort((a, b) => b.price - a.price)

			case SortOption.RATING:
				return cityHotels.sort((a, b) => b.rating - a.rating)
		}

		return cityHotels
	}, [cityHotels, activeSort])

	return {
		activeHotels,

		activeCardId,
		setActiveCardId,

		activeSort,
		setActiveSort,
	}
}

export default usePageMainState
