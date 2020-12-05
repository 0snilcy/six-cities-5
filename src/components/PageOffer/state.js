import { useCallback, useEffect, useState } from 'react'
import { API, useHotels } from 'services/api'

export const usePageOfferState = (activeHotelId) => {
	const { hotels } = useHotels()
	const changeFavorite = API.changeFavorite

	const hotel = hotels.find(({ id }) => id === activeHotelId) || {}

	const [comments, setComments] = useState([])
	const [nearby, setNearby] = useState([])
	const [activeNearby, setActiveNearby] = useState()

	const onSubmitReview = useCallback(
		(comment) => {
			API.sendComment(activeHotelId, comment).then(setComments)
		},
		[activeHotelId]
	)

	useEffect(() => {
		window.scroll(0, 0)
		API.getComments(activeHotelId).then(setComments)
		API.getNearby(activeHotelId).then((nearbyHotels) =>
			setNearby(nearbyHotels.map(({ id }) => id))
		)

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
