import { useCallback, useEffect, useState } from 'react'
import { api } from 'services/api'
import { hotelsStore } from 'store/hotels'

export const usePageOfferState = (activeHotelId) => {
	const { hotels, changeFavorite } = hotelsStore

	const hotel = hotels.find(({ id }) => id === activeHotelId) || {}

	const [comments, setComments] = useState([])
	const [nearby, setNearby] = useState([])
	const [activeNearby, setActiveNearby] = useState()

	const onSubmitReview = useCallback(
		(comment) => {
			api.sendComment(activeHotelId, comment).then(setComments)
		},
		[activeHotelId]
	)

	useEffect(() => {
		window.scroll(0, 0)
		api.getComments(activeHotelId).then(setComments)
		api
			.getNearby(activeHotelId)
			.then((nearbyHotels) => setNearby(nearbyHotels.map(({ id }) => id)))

		return () => {
			setNearby([])
			setComments([])
		}
	}, [activeHotelId])

	return {
		hotel,
		activeNearby,
		setActiveNearby,
		nearby: nearby.map((id) => hotels.find((el) => el.id === id)),
		comments,
		onSubmitReview,
		setFavorite: changeFavorite,
	}
}
