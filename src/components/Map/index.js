import React, { memo, useRef } from 'react'
import * as pt from 'types'
import useMap from './state'

export const Map = memo(function Map({ locations = [], city }) {
	if (!locations.length) return null

	const mapRef = useRef()
	useMap(mapRef, locations, city)

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '100%',
			}}
		></div>
	)
})

Map.propTypes = {
	city: pt.location,
	locations: pt.locations,
}
