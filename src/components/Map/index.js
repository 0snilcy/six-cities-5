import React, { useEffect } from 'react'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import * as pt from 'types'

export const Map = ({ points = [] }) => {
	useEffect(() => {
		const city = [52.38333, 4.9]
		const icon = leaflet.icon({
			iconUrl: `img/pin.svg`,
			iconSize: [30, 30],
		})

		const zoom = 12

		const map = leaflet.map(`map`, {
			center: city,
			zoom,
			zoomControl: false,
			marker: true,
		})
		map.setView(city, zoom)

		leaflet
			.tileLayer(
				`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				}
			)
			.addTo(map)

		points.forEach(({ lat, lng }) =>
			leaflet.marker([lat, lng], { icon }).addTo(map)
		)
	})

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
	points: pt.mapPoints,
}
