import { configureStore } from '@reduxjs/toolkit'
import { hotelsStore } from './points/hotels/reducer'
import { hotelStore } from './points/hotel/reducer'
import { userStore } from './points/user/reducer'

export const store = configureStore({
	reducer: {
		[hotelsStore.name]: hotelsStore.reducer,
		[userStore.name]: userStore.reducer,
		[hotelStore.name]: hotelStore.reducer,
	},
})
