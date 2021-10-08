import React, { useMemo } from 'react';
import classNames from 'classnames';
import './cartComponent.css';
import { useCartContext } from '../../context/cartContext';

const Cart: React.FC<{ isClicked: boolean; onClose: () => void }> = ({ isClicked, onClose }) => {
    const cartClass = useMemo(
        () => classNames('cardComponent', { '--visible': isClicked }),
        [isClicked]
    );
    const { list } = useCartContext();

    return (
        <div className={cartClass}>
            <header>Cart</header>
            {list.map(item => item.title)}
            <button onClick={onClose}>Close</button>
        </div>
    );
};
export default Cart;
