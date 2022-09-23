import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CardIcon from '../../componets/card-icon/card-icon.comp';
import CartDropdown from '../../componets/cart-dropdown/cart-dropdown.comp';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { singOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './nav.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={singOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/log-in'>
							SIGN IN
						</Link>
					)}

					<CardIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
