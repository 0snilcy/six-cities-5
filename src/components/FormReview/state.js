import { useState } from 'react'

const useFormReviewState = () => {
	const [text, setText] = useState('')
	const [rating, setRating] = useState()
	const [disabled, setDisabled] = useState(!(text.length > 50 && rating))

	const updateRating = ({ target }) => {
		setRating(target.value)
		setDisabled(!(text.length > 50 && target.value))
	}

	const updateText = ({ target }) => {
		setText(target.value)
		setDisabled(!(target.value.length > 50 && rating))
	}

	return {
		text,
		rating,
		disabled,
		updateRating,
		updateText,
	}
}

export default useFormReviewState
