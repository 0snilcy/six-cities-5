import { useDispatch, useSelector } from 'react-redux'
import { DataActionCreator } from './action'
import { dataSelector } from './store'

export const useHotels = () => {
	const hotels = useSelector(dataSelector.hotels)
	const cityHotels = useSelector(dataSelector.cityHotels)
	return {
		hotels,
		cityHotels,
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
