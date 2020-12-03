import React from 'react'
import { useLoading } from 'hooks/common'
import './style.css'

export const Spinner = () => {
	const { loading } = useLoading()

	return (
		<div
			className='spinner'
			style={{
				display: loading ? 'block' : 'none',
			}}
		></div>
	)
}

Spinner.propTypes = {}
