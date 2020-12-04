import { useState } from 'react'
import { userStore } from 'store/user'

const usePageLoginState = () => {
	const { login } = userStore
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return {
		email,
		setEmail,
		password,
		setPassword,
		login,
	}
}

export default usePageLoginState
