import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SingUpForm from '../sign-up-form/sing-up-form.component';

const SignIn = () => {
    
	const logGooglePopupUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign IN Page</h1>
			<button onClick={logGooglePopupUser}>Sing in with Google Popup</button>
			<SingUpForm />
		</div>
	);
};

export default SignIn;
