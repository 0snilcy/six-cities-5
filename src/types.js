/* eslint-disable camelcase */
import pt from 'prop-types'

export const fn = pt.func.isRequired
export const number = pt.number.isRequired
export const _number = pt.number
export const string = pt.string.isRequired
export const _string = pt.string
export const bool = pt.bool.isRequired
export const stringArr = pt.arrayOf(string)

export const location = pt.shape({
	latitude: number,
	longitude: number,
	zoom: number,
}).isRequired

export const locations = pt.arrayOf(
	pt.shape({
		location,
		id: pt.number,
	})
).isRequired

const user = pt.shape({
	avatar_url: string,
	id: number,
	is_pro: bool,
	name: string,
}).isRequired

export const hotel = pt.shape({
	bedrooms: number,
	city: pt.shape({
		location,
		name: string,
	}),
	description: string,
	goods: stringArr,
	host: user,
	id: number,
	images: stringArr,
	is_favorite: bool,
	is_premium: bool,
	location,
	max_adults: number,
	preview_image: string,
	price: number,
	rating: number,
	title: string,
	type: string,
}).isRequired

export const hotels = pt.arrayOf(hotel).isRequired

export const comment = pt.shape({
	comment: string,
	date: string,
	id: number,
	rating: number,
	user,
}).isRequired

export const comments = pt.arrayOf(comment).isRequired
