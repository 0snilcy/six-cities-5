import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { APIAction } from 'store/api-actions'
import { DataActionCreator } from './action'
import { dataSelector } from './store'

export const useHotels = () => {
	const hotels = useSelector(dataSelector.hotels)
	const cityHotels = useSelector(dataSelector.cityHotels)
	const dispatch = useDispatch()

	return {
		hotels,
		cityHotels,
		clearActiveHotel: () => dispatch(DataActionCreator.clearActiveHotel()),
	}
}

export const useCity = () => {
	const dispatch = useDispatch()
	const cities = useSelector(dataSelector.cities)
	const activeCity = useSelector(dataSelector.city)

	return {
		activeCity,
		cities,
		setActiveCity: (city) => dispatch(DataActionCreator.changeCity(city)),
	}
}

export const useFavoriteHotels = () => {
	const favoriteHotels = useSelector(dataSelector.favoriteHotels)

	return {
		favoriteHotels,
	}
}

export const useFavoriteToggle = () => {
	const dispatch = useDispatch()
	const setFavorite = useCallback(
		(id, status) => dispatch(APIAction.setFavorite(id, status)),
		[]
	)

	return {
		setFavorite,
	}
}

export const useOffer = (id) => {
	const dispatch = useDispatch()

	const comments = useSelector(dataSelector.activeHotelComments)
	const nearby = useSelector(dataSelector.activeHotelNearby)

	useMemo(() => {
		if (id) {
			dispatch(APIAction.getNearby(id))
			dispatch(APIAction.getComments(id))
		}
	}, [id])

	return {
		nearby,
		comments,
		sendComment: (comment, rating) =>
			dispatch(APIAction.sendComment(id, { comment, rating })),
	}
}
