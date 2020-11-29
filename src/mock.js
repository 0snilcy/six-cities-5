const review = {
	name: 'Max',
	avatar: 'img/avatar-max.jpg',
	rating: 4,
	text:
		'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
	date: '2019-03-24',
}

const offer = {
	id: 1,
	rating: 5,
	price: 180,
	isFavorite: true,
	isPremium: false,
	type: `Apartment`,
	title: `Nice, cozy, warm big bed apartment`,
	image: `img/apartment-03.jpg`,
	smallImage: `img/apartment-small-03.jpg`,

	gallery: [
		'img/room.jpg',
		'img/apartment-01.jpg',
		'img/apartment-02.jpg',
		'img/apartment-03.jpg',
		'img/studio-01.jpg',
		'img/apartment-01.jpg',
	],
	bedrooms: 3,
	adults: 4,
	inside: [
		'Wi-Fi',
		'Washing machine',
		'Towels',
		'Heating',
		'Coffee machine',
		'Baby seat',
		'Kitchen',
		'Dishwasher',
		'Cabel TV',
		'Fridge',
	],
	user: {
		name: 'Angelina',
		avatar: 'img/avatar-angelina.jpg',
		pro: true,
	},
	description:
		'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
	reviews: [review, review],
	other: [
		{
			id: Math.random().toString(),
			rating: 5,
			price: 180,
			isFavorite: true,
			isPremium: false,
			type: `Apartment`,
			title: `Nice, cozy, warm big bed apartment`,
			image: `img/apartment-03.jpg`,
			smallImage: `img/apartment-small-03.jpg`,
		},
		{
			id: Math.random().toString(),
			rating: 5,
			price: 180,
			isFavorite: true,
			isPremium: false,
			type: `Apartment`,
			title: `Nice, cozy, warm big bed apartment`,
			image: `img/apartment-03.jpg`,
			smallImage: `img/apartment-small-03.jpg`,
		},
		{
			id: Math.random().toString(),
			rating: 5,
			price: 180,
			isFavorite: true,
			isPremium: false,
			type: `Apartment`,
			title: `Nice, cozy, warm big bed apartment`,
			image: `img/apartment-03.jpg`,
			smallImage: `img/apartment-small-03.jpg`,
		},
	],
}

const offersArr = [
	{
		...offer,
		rating: 3,
		price: 5180,
		isFavorite: false,
		isPremium: true,
		type: `Apartment`,
		title: `The building is green and from 18th century`,
		image: `img/apartment-02.jpg`,
		smallImage: `img/apartment-small-03.jpg`,
	},
	offer,
]

export const offers = new Array(6).fill(1).map((_, id) => {
	const item = {
		...offersArr[id % 2],
	}
	item.id = Math.random().toString().split('.')[1]
	return item
})

export const favorites = [
	{
		city: `Amsterdam`,
		offers: offersArr,
	},
	{
		city: `Cologne`,
		offers: offersArr,
	},
]
