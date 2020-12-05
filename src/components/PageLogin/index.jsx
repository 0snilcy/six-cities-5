import { Header } from 'components/Header'
import React from 'react'
import usePageLoginState from './state'

export const PageLogin = function PageLogin() {
	const { email, setEmail, password, setPassword, login } = usePageLoginState()

	return (
		<div className='page page--gray page--login'>
			<Header />

			<main className='page__main page__main--login'>
				<div className='page__login-container container'>
					<section className='login'>
						<h1 className='login__title'>Sign in</h1>
						<form className='login__form form' action='#' method='post'>
							<div className='login__input-wrapper form__input-wrapper'>
								<label className='visually-hidden'>E-mail</label>
								<input
									className='login__input form__input'
									type='email'
									name='email'
									placeholder='Email'
									required=''
									value={email}
									onChange={({ target }) => setEmail(target.value)}
								/>
							</div>
							<div className='login__input-wrapper form__input-wrapper'>
								<label className='visually-hidden'>Password</label>
								<input
									className='login__input form__input'
									type='password'
									name='password'
									placeholder='Password'
									required=''
									value={password}
									onChange={({ target }) => setPassword(target.value)}
								/>
							</div>
							<button
								className='login__submit form__submit button'
								type='submit'
								onClick={(evt) => {
									evt.preventDefault()
									login({
										email,
										password,
									})
								}}
							>
								Sign in
							</button>
						</form>
					</section>
					<section className='locations locations--login locations--current'>
						<div className='locations__item'>
							<a className='locations__item-link' href='#'>
								<span>Amsterdam</span>
							</a>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
