export const DataActionType = {
	CHANGE_CITY: 'CHANGE_CITY',
	CHANGE_HOTELS: 'CHANGE_HOTELS',

	CLEAR_ACTIVE_HOTEL: 'CLEAR_ACTIVE_HOTEL',
	CHANGE_HOTEL_COMMENTS: 'CHANGE_HOTEL_COMMENTS',
	CHANGE_HOTEL_NEARBY: 'CHANGE_HOTEL_NEARBY',
	CHANGE_FAVORITE: 'CHANGE_FAVORITE',
	CHANGE_FAVORITE_LIST: 'CHANGE_FAVORITE_LIST',
}

export const DataActionCreator = {
	changeCity: (city) => ({
		type: DataActionType.CHANGE_CITY,
		payload: city,
	}),
	changeHotels: (hotels) => ({
		type: DataActionType.CHANGE_HOTELS,
		payload: hotels,
	}),

	clearActiveHotel: () => ({
		type: DataActionType.CLEAR_ACTIVE_HOTEL,
	}),
	changeHotelComments: (comments) => ({
		type: DataActionType.CHANGE_HOTEL_COMMENTS,
		payload: comments,
	}),
	changeNearbyHotels: (comments) => ({
		type: DataActionType.CHANGE_HOTEL_NEARBY,
		payload: comments,
	}),
	changeFavoriteHotel: (hotel) => ({
		type: DataActionType.CHANGE_FAVORITE,
		payload: hotel,
	}),
	changeFavoriteList: (hotels) => ({
		type: DataActionType.CHANGE_FAVORITE_LIST,
		payload: hotels,
	}),
}
