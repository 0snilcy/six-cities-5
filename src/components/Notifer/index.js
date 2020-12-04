import React from 'react'
import './style.css'
import { appStore } from 'store/app'
import { observer } from 'mobx-react-lite'
import cl from 'classnames'

export const Notifer = observer(function Notifer() {
	const { loading, error } = appStore

	return (
		<div className='notifer'>
			<div
				className={cl('notifer-load', {
					'notifer--active': loading,
				})}
			></div>
			<div
				className={cl('notifer-error', {
					'notifer--active': error,
				})}
			>
				{error}
			</div>
		</div>
	)
})
