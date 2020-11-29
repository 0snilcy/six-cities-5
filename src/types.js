import { CardListType } from 'constants'
import pt from 'prop-types'

export const fn = pt.func.isRequired
export const number = pt.number.isRequired
export const string = pt.string.isRequired
export const bool = pt.bool.isRequired

export const offer = pt.shape({
	title: string,
	rating: number,
	price: number,
	isFavorite: bool,
	isPremium: bool,
	type: pt.oneOf([`Apartment`, `Private room`]),
	image: string,
	smallImage: string,
}).isRequired

export const offers = pt.arrayOf(offer)

const favoriteLocation = pt.shape({
	city: string,
	offers,
}).isRequired

export const favoriteLocations = pt.arrayOf(favoriteLocation)

export const offerPage = pt.shape({
	id: string,
	offer,
}).isRequired

export const listTypes = pt.oneOf(Object.values(CardListType))

const mapPoint = pt.shape({
	lat: number,
	lng: number,
})

export const mapPoints = pt.arrayOf(mapPoint)

const review = pt.shape({
	name: string,
	avatar: string,
	rating: number,
	text: string,
	date: string,
})

export const reviews = pt.arrayOf(review)
