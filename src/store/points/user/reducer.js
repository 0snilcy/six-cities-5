import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { APIRoute, StoreNamespace } from 'const'
import { api } from 'services/api'

export const userStoreAPI = {
	login: createAsyncThunk(`${StoreNamespace.USER}/login`, async (data) => {
		const response = await api.http.post(APIRoute.LOGIN, data)
		return response.data
	}),
	checkAuth: createAsyncThunk(`${StoreNamespace.USER}/checkAuth`, async () => {
		const response = await api.http.get(APIRoute.LOGIN)
		return response.data
	}),
}

export const userStore = createSlice({
	name: StoreNamespace.USER,
	initialState: null,
	reducers: {
		clearUser: () => null,
	},
	extraReducers: {
		[userStoreAPI.login.fulfilled]: (_, { payload }) => payload,
		[userStoreAPI.checkAuth.fulfilled]: (_, { payload }) => payload,
	},
})
