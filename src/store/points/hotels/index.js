import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIRoute, StoreNamespace } from 'const'
import { api } from 'services/api'
import { createSelector } from 'reselect'

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
	initialState: {
		items: [],
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[hotelsStoreAPI.getHotels.fulfilled]: (store, { payload }) => {
			store.items = payload
		},
		[hotelsStoreAPI.changeFavorite.pending]: (store) => {
			store.loading = true
		},
		[hotelsStoreAPI.changeFavorite.fulfilled]: (store, { payload }) => {
			const changedHotel = store.items.find((hotel) => hotel.id === payload.id)
			changedHotel.is_favorite = payload.is_favorite
			store.loading = false
		},
	},
})

const getMain = (store) => store[hotelsStore.name]
const getHotels = createSelector(getMain, ({ items }) => items)

export const hotelsSelector = {
	getHotels,
	getLoadingStatus: createSelector(getMain, ({ loading }) => loading),
	getFavoriteHotels: createSelector(getHotels, (hotels) =>
		hotels.filter(({ is_favorite }) => is_favorite)
	),
}
