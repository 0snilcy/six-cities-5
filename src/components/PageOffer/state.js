import { useCallback, useEffect, useState } from 'react'
import { useFavoriteToggle, useHotels, useOffer } from 'store/points/data/hooks'

export const usePageOfferState = (activeHotelId) => {
	const { clearActiveHotel, hotels } = useHotels()
	const hotel = hotels.find(({ id }) => id === activeHotelId) || {}

	const [activeNearby, setActiveNearby] = useState()
	const { nearby, comments, sendComment } = useOffer(hotel.id)
	const { setFavorite } = useFavoriteToggle()

	const onSubmitReview = useCallback(
		(data) => sendComment(data.text, data.rating),
		[]
	)

	useEffect(() => clearActiveHotel, [hotel.id])

	return {
		hotel,
		activeNearby,
		setActiveNearby,
		nearby,
		comments,
		onSubmitReview,
		setFavorite,
	}
}
