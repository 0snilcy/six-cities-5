import React, { memo, useRef } from 'react'
import * as pt from 'types'
import { useMapState } from './state'

export const Map = memo(function Map({ locations = [], city }) {
	const mapRef = useRef()
	useMapState(mapRef, locations, city)

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
