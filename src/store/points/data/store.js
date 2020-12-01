import { createSelector } from 'reselect'

export const dataStoreInitial = {
	city: null,
	hotels: [],
	activeHotel: {},
}

export const DATA_NAMESPACE = 'DATA'

const getHotels = (store) => store[DATA_NAMESPACE].hotels
const activeHotel = (store) => store[DATA_NAMESPACE].activeHotel
const getActiveCity = (store) =>
	store[DATA_NAMESPACE].city || getCities(store)[0]

const getCities = createSelector(getHotels, (hotels) => [
	...new Set(hotels.map(({ city }) => city.name)),
])
export const dataSelector = {
	hotels: getHotels,
	city: getActiveCity,
	cityHotels: createSelector([getHotels, getActiveCity], (hotels, activeCity) =>
		hotels.filter((hotel) => hotel.city.name === activeCity)
	),
	cities: getCities,
	activeHotelComments: createSelector(
		activeHotel,
		({ comments }) => comments || []
	),
	activeHotelNearby: createSelector(
		[activeHotel, getHotels],
		({ nearby = [] }, hotels) =>
			nearby.map((nearbyId) =>
				hotels.find(({ id: hotelId }) => hotelId === nearbyId)
			)
	),
	favoriteHotels: createSelector(
		[activeHotel, getHotels],
		({ favoriteHotels = [] }, hotels) =>
			favoriteHotels.map((favoriteId) =>
				hotels.find(({ id: hotelId }) => hotelId === favoriteId)
			)
	),
}
