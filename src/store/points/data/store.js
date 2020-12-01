import { createSelector } from 'reselect'

export const dataStoreInitial = {
	city: null,
	hotels: [],
}

export const DATA_NAMESPACE = 'DATA'

const getHotels = (store) => store[DATA_NAMESPACE].hotels
const getCities = createSelector(getHotels, (hotels) => [
	...new Set(hotels.map(({ city }) => city.name)),
])
const getActiveCity = (store) =>
	store[DATA_NAMESPACE].city || getCities(store)[0]

export const dataSelector = {
	hotels: getHotels,
	city: getActiveCity,
	cityHotels: createSelector([getHotels, getActiveCity], (hotels, activeCity) =>
		hotels.filter((hotel) => hotel.city.name === activeCity)
	),
	cities: getCities,
}
