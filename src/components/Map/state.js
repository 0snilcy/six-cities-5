import { useEffect, useState } from 'react'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

const useMap = (mapContainer, locations, city) => {
	const [map, setMap] = useState()

	useEffect(() => {
		const _map = leaflet.map(mapContainer.current, {
			// center: [city.latitude, city.longitude],
			// zoom: city.zoom,
			zoomControl: false,
			marker: true,
		})

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
	}, [])

	useEffect(() => {
		if (map) {
			map.setView([city.latitude, city.longitude], city.zoom)

			locations.forEach(({ location: { latitude, longitude }, active }) => {
				leaflet
					.marker([latitude, longitude], {
						icon: leaflet.icon({
							iconUrl: `img/pin${active ? '-active' : ''}.svg`,
							iconSize: [30, 30],
						}),
					})
					.addTo(map)
			})
		}
	}, [locations, map])
}

export default useMap
