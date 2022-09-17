import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch(error.code) {
				case 'auth/wrong-password':
					alert('Incorect password for email');
					break

				case 'auth/user-not-found':
					alert('No user associated with this email');
					break
				default:
					console.log(error);
			}

			// if (error.code === 'auth/wrong-password') {
			// 	alert('Password incorect. Please try again.');
			// } else if (error.code === 'auth/user-not-found')  {
			// 	console.log('Email incorrect.', error);
			// }
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sing in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
					required
				/>

				<FormInput
					label='Password'
					type='password'
					onChange={handleChange}
					name='password'
					value={password}
					required
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SingInForm;