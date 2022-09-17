import SingInForm from '../sign-in-fom/sing-in-form.component';
import SingUpForm from '../sign-up-form/sing-up-form.component';
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
