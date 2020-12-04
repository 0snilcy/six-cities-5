import { makeAutoObservable, autorun } from 'mobx'
import { api } from 'services/api'

class HotelStore {
	hotels = []

	constructor() {
		makeAutoObservable(this)

		this.updateHotelFavorite = this.updateHotelFavorite.bind(this)
		this.changeFavorite = this.changeFavorite.bind(this)
	}

	setHotels(items = []) {
		this.hotels = items
	}

	updateHotelFavorite(updatedHotel) {
		this.hotels = this.hotels.map((hotel) =>
			hotel.id === updatedHotel.id ? updatedHotel : hotel
		)
	}

	getHotels() {
		return api.getHotels().then((hotels) => {
			this.setHotels(hotels)
		})
	}

	changeFavorite(id, status) {
		return api.changeFavorite(id, status).then(this.updateHotelFavorite)
	}
}

export const hotelsStore = new HotelStore()

autorun(() => {
	console.log('Hotel', hotelsStore.hotels.length)
})
