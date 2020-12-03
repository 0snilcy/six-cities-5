import { useSelector, useDispatch } from 'react-redux'
import { hotelsStoreAPI } from './reducer'
import { hotelsSelector } from './selectors'

export const useHotels = () => {
	const hotels = useSelector(hotelsSelector.getHotels)

	return {
		hotels,
	}
}

export const useFavoriteHotels = () => {
	const favoriteHotels = useSelector(hotelsSelector.getFavoriteHotels)

	return {
		favoriteHotels,
	}
}

export const useChangeFavorite = () => {
	const dispatch = useDispatch()

	return {
		changeFavorite: (id, status) =>
			dispatch(hotelsStoreAPI.changeFavorite({ id, status })),
	}
}
