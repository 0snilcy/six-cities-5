import { useMemo, useState } from 'react'
import { SortOption } from 'const'
import { useHotels } from 'store/points/data/hooks'

const usePageMainState = () => {
	const [activeSort, setActiveSort] = useState(SortOption.POPULAR)
	const [activeCardId, setActiveCardId] = useState()
	const { cityHotels } = useHotels()

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
	}
}

export default usePageMainState
