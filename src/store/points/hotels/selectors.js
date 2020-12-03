import { createSelector } from 'reselect'
import { hotelsStore } from './reducer'

const getHotels = (store) => store[hotelsStore.name]

export const hotelsSelector = {
	getHotels,
	getFavoriteHotels: createSelector(getHotels, (hotels) =>
		hotels.filter(({ is_favorite }) => is_favorite)
	),
}
