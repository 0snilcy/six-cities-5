import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIRoute, StoreNamespace } from 'const'
import { api } from 'services/api'

export const hotelsStoreAPI = {
	getHotels: createAsyncThunk(
		`${StoreNamespace.HOTELS}/getHotels`,
		async () => {
			const response = await api.http.get(APIRoute.HOTELS)
			return response.data
		}
	),
	changeFavorite: createAsyncThunk(
		`${StoreNamespace.HOTELS}/changeFavorite`,
		async ({ id, status }) => {
			const response = await api.http.post(
				`${APIRoute.FAVORITE}/${id}/${+status}`
			)
			return response.data
		}
	),
}

export const hotelsStore = createSlice({
	name: StoreNamespace.HOTELS,
	initialState: [],
	reducers: {},
	extraReducers: {
		[hotelsStoreAPI.getHotels.fulfilled]: (_, { payload }) => payload,
		[hotelsStoreAPI.changeFavorite.fulfilled]: (store, { payload }) => {
			const changedHotel = store.find((hotel) => hotel.id === payload.id)
			changedHotel.is_favorite = payload.is_favorite
		},
	},
})
