import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIRoute, StoreNamespace } from 'const'
import { api } from 'services/api'
import { createSelector } from 'reselect'
import { hotelsSelector } from '../hotels/'

const initialState = {
	comments: [],
	nearby: [],
	loading: 0,
}

export const hotelStoreAPI = {
	getHotelComments: createAsyncThunk(
		`${StoreNamespace.HOTEL}/getHotelComments`,
		async (id) => {
			const response = await api.http.get(`${APIRoute.COMMENTS}/${id}`)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			return response.data
		}
	),
	sendComment: createAsyncThunk(
		`${StoreNamespace.HOTEL}/sendComment`,
		async ({ id, comment }) => {
			const response = await api.http.post(
				`${APIRoute.COMMENTS}/${id}`,
				comment
			)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			return response.data
		}
	),
	getHotelNearby: createAsyncThunk(
		`${StoreNamespace.HOTEL}/getHotelNearby`,
		async (id) => {
			const response = await api.http.get(
				`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`
			)
			await new Promise((resolve) => setTimeout(resolve, 2000))
			return response.data
		}
	),
}

const setLoading = (store) => {
	store.loading++
}

export const hotelStore = createSlice({
	name: StoreNamespace.HOTEL,
	initialState,
	reducers: {
		clear: () => initialState,
	},
	extraReducers: {
		[hotelStoreAPI.getHotelComments.fulfilled]: (store, { payload }) => {
			store.comments = payload
			store.loading--
		},
		[hotelStoreAPI.sendComment.fulfilled]: (store, { payload }) => {
			store.comments = payload
			store.loading--
		},
		[hotelStoreAPI.getHotelNearby.fulfilled]: (store, { payload }) => {
			store.nearby = payload.map(({ id }) => id)
			store.loading--
		},
		[hotelStoreAPI.getHotelComments.pending]: setLoading,
		[hotelStoreAPI.sendComment.pending]: setLoading,
		[hotelStoreAPI.getHotelNearby.pending]: setLoading,
	},
})

const getHotel = (store) => store[StoreNamespace.HOTEL]

export const hotelSelector = {
	getHotel,
	getLoadingStatus: createSelector(getHotel, ({ loading }) => loading > 0),
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
