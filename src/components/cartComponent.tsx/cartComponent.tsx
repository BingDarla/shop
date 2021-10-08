import React, { useMemo } from 'react';
import classNames from 'classnames';
import './cartComponent.css';
import { useCartContext } from '../../context/cartContext';
import Button from '@mui/material/Button';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartCard from '../cartCardComponent/cartCardComponent';

const Cart: React.FC<{ isClicked: boolean; onClose: () => void }> = ({ isClicked, onClose }) => {
    const cartClass = useMemo(
        () => classNames('cartComponent', { '--visible': isClicked }),
        [isClicked]
    );
    const { list } = useCartContext();

    return (
        <div className={cartClass}>
            <div className="cartComponent__header">
                <span>Cart Summary</span>
                <IconButton onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="cartComponent__content">
                {Boolean(list.length) ? (
                    <ol>
                        {list.map(item => (
                            <li key={item.title}>
                                <CartCard item={item} />
                            </li>
                        ))}
                    </ol>
                ) : (
                    <div className="cartComponent__empty">Your cart is empty</div>
                )}
            </div>

            <div className="cartComponent__actions">
                <Button variant="contained" startIcon={<LocalShippingIcon />}>
                    Calculate Toll
                </Button>
                <Button variant="contained">Order</Button>
            </div>
        </div>
    );
};
export default Cart;
