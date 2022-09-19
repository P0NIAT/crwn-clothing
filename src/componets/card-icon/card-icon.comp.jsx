import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './card.icon.style.scss';

const CardIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const toggleisCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<div className='cart-icon-container' onClick={toggleisCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CardIcon;
