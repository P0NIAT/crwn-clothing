import SingInForm from '../sign-in-fom/sing-in.comp';
import SingUpForm from '../sign-up-form/sing-up.comp';
import './log-in.styles.scss'

const LogIn = () => {

	return (
		<div className='authentication-container'>
			<SingInForm />
			<SingUpForm />
		</div>
	);
};

export default LogIn;
