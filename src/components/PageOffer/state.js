import { useCallback, useEffect, useState } from 'react'
import { useHotel, useSendComment } from 'store/points/hotel/hooks'
import { useChangeFavorite, useHotels } from 'store/points/hotels/hooks'

export const usePageOfferState = (activeHotelId) => {
	const { hotels } = useHotels()
	const hotel = hotels.find(({ id }) => id === activeHotelId) || {}

	const [activeNearby, setActiveNearby] = useState()
	const { changeFavorite } = useChangeFavorite()
	const { comments, nearby, clear } = useHotel(activeHotelId)
	const { sendComment } = useSendComment()

	const onSubmitReview = useCallback(
		(data) => sendComment(activeHotelId, data),
		[]
	)

	useEffect(() => {
		window.scroll(0, 0)
		return clear
	}, [hotel.id])

	return {
		hotel,
		activeNearby,
		setActiveNearby,
		nearby,
		comments,
		onSubmitReview,
		setFavorite: changeFavorite,
	}
}
