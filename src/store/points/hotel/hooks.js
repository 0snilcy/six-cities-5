import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hotelStore, hotelStoreAPI } from './reducer'
import { hotelSelector } from './selectors'

export const useHotel = (hotelId) => {
	const comments = useSelector(hotelSelector.getHotelComments)
	const nearby = useSelector(hotelSelector.getHotelNearby)
	const dispatch = useDispatch()

	useMemo(() => {
		dispatch(hotelStoreAPI.getHotelComments(hotelId))
		dispatch(hotelStoreAPI.getHotelNearby(hotelId))
	}, [hotelId])

	return {
		comments,
		nearby,
		clear: () => dispatch(hotelStore.actions.clear()),
	}
}

export const useSendComment = () => {
	const dispatch = useDispatch()

	return {
		sendComment: (id, comment) =>
			dispatch(hotelStoreAPI.sendComment({ id, comment })),
	}
}
