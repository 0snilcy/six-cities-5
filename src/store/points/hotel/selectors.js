import { createSelector } from 'reselect'
import { hotelsSelector } from '../hotels/selectors'
import { hotelStore } from './reducer'

const getHotel = (store) => store[hotelStore.name]

export const hotelSelector = {
	getHotel,
	getHotelComments: createSelector(getHotel, ({ comments }) => comments),
	getHotelNearby: createSelector(
		[hotelsSelector.getHotels, getHotel],
		(hotels, { nearby }) => {
			return nearby.map((nearbyId) =>
				hotels.find(({ id: hotelId }) => hotelId === nearbyId)
			)
		}
	),
}
