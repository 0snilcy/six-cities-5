import { useState } from 'react'
import { useSelector } from 'react-redux'
import { hotelSelector } from 'store/points/hotel'
import { hotelsSelector } from 'store/points/hotels'

export const useToggle = (defaultValue) => {
	const [isActive, setIsActive] = useState(defaultValue)
	return [isActive, () => setIsActive(!isActive), setIsActive]
}

export const useLoading = () => {
	const hotelsLoading = useSelector(hotelsSelector.getLoadingStatus)
	const hotelLoading = useSelector(hotelSelector.getLoadingStatus)

	return {
		loading: hotelsLoading || hotelLoading,
	}
}
