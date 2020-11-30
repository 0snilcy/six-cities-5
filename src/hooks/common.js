import { useState } from 'react'

export const useToggle = (defaultValue) => {
	const [isActive, setIsActive] = useState(defaultValue)
	return [isActive, () => setIsActive(!isActive), setIsActive]
}
