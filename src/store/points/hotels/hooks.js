import { useSelector, useDispatch } from 'react-redux'
import { hotelsSelector, hotelsStoreAPI } from './'

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
