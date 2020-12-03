import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIRoute, StoreNamespace } from 'const'
import { api } from 'services/api'

const initialState = {
	comments: [],
	nearby: [],
}

export const hotelStoreAPI = {
	getHotelComments: createAsyncThunk(
		`${StoreNamespace.HOTEL}/getHotelComments`,
		async (id) => {
			const response = await api.http.get(`${APIRoute.COMMENTS}/${id}`)
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
			return response.data
		}
	),
	getHotelNearby: createAsyncThunk(
		`${StoreNamespace.HOTEL}/getHotelNearby`,
		async (id) => {
			const response = await api.http.get(
				`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`
			)
			return response.data
		}
	),
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
		},
		[hotelStoreAPI.sendComment.fulfilled]: (store, { payload }) => {
			store.comments = payload
		},
		[hotelStoreAPI.getHotelNearby.fulfilled]: (store, { payload }) => {
			store.nearby = payload.map(({ id }) => id)
		},
	},
})
