import { useMemo } from 'react'
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

export const useComments = (id) => {
	const dispatch = useDispatch()
	useMemo(() => dispatch(APIAction.getComments(id)), [id])
	const comments = useSelector(dataSelector.activeHotelComments)

	return {
		comments,
		sendComment: (comment, rating) =>
			dispatch(APIAction.sendComment(id, { comment, rating })),
	}
}

export const useNearby = (id) => {
	const dispatch = useDispatch()
	useMemo(() => dispatch(APIAction.getNearby(id)), [id])
	const nearby = useSelector(dataSelector.activeHotelNearby)

	return {
		nearby,
	}
}

export const useFavoriteStatus = () => {
	const dispatch = useDispatch()

	return {
		setFavorite: (id, status) => dispatch(APIAction.setFavorite(id, status)),
	}
}

export const useFavoriteList = () => {
	const dispatch = useDispatch()
	dispatch(APIAction.getFavorite())
	const favoriteHotels = useSelector(dataSelector.favoriteHotels)
	return {
		favoriteHotels,
	}
}
