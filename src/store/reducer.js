import { configureStore } from '@reduxjs/toolkit'
import { hotelsStore } from './points/hotels'
import { hotelStore } from './points/hotel'
import { userStore } from './points/user'

export const store = configureStore({
	reducer: {
		[hotelsStore.name]: hotelsStore.reducer,
		[userStore.name]: userStore.reducer,
		[hotelStore.name]: hotelStore.reducer,
	},
})
