import React, { useEffect, useState } from 'react'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import * as pt from 'types'

export const Map = ({ locations = [], city }) => {
	if (!locations.length) return 'Empty'

	const [map, setMap] = useState()
	const renderPins = (ctx, pins) =>
		pins.forEach(({ location: { latitude, longitude }, active }) =>
			leaflet
				.marker([latitude, longitude], {
					icon: leaflet.icon({
						iconUrl: `img/pin${active ? '-active' : ''}.svg`,
						iconSize: [30, 30],
					}),
				})
				.addTo(ctx)
		)

	useEffect(() => {
		const _map = leaflet.map(`map`, {
			center: [city.latitude, city.longitude],
			zoom: city.zoom,
			zoomControl: false,
			marker: true,
		})
		_map.setView([city.latitude, city.longitude], city.zoom)

		leaflet
			.tileLayer(
				`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				}
			)
			.addTo(_map)
		setMap(_map)
		renderPins(_map, locations)
	}, [])

	useEffect(() => {
		if (map) {
			renderPins(map, locations)
			map.setView([city.latitude, city.longitude], city.zoom)
		}
	}, [locations])

	return (
		<div
			id='map'
			style={{
				width: '100%',
				height: '100%',
			}}
		></div>
	)
}

Map.propTypes = {
	city: pt.location,
	locations: pt.locations,
}
