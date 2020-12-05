import { useState } from 'react'
import { useUser } from 'services/api'

const usePageLoginState = () => {
	const { login } = useUser()
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
