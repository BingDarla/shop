import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useCartContext } from '../../context/cartContext';
import CartCard from '../cartCardComponent/cartCardComponent';
import { putOrder } from '../../service/apiService';
import './cartComponent.css';

const Cart: React.FC<{ isClicked: boolean; onClose: () => void }> = ({ isClicked, onClose }) => {
    const { list, subTotal, onUpdateToll, toll, emptyCart } = useCartContext();
    const history = useHistory();

    const onSubmit = useCallback(async () => {
        try {
            await putOrder(list);
            emptyCart && emptyCart();
            history.push('./success');
        } catch {
            console.log('error in putting order');
        }
    }, [emptyCart, history, list]);

    return (
        <div className="cartComponent">
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
            {Boolean(subTotal) && (
                <div className="u-info">
                    <div className="u-flex-column">
                        <span className="u-tag">Subtotal </span>
                        <span className="u-tag-small">(Excludes delivery)</span>
                    </div>

                    <span className="u-tag">{`$${subTotal}`}</span>
                </div>
            )}
            {Boolean(toll) && (
                <div className="u-info">
                    <span className="u-tag">Toll</span>
                    <span className="u-tag">{`$${toll}`}</span>
                </div>
            )}

            {Boolean(list.length) && (
                <div className="cartComponent__actions">
                    <Button
                        variant="contained"
                        onClick={onUpdateToll}
                        startIcon={<LocalShippingIcon />}
                    >
                        Toll Calculate
                    </Button>
                    <Button variant="contained" onClick={onSubmit} disabled={!toll}>
                        Order
                    </Button>
                </div>
            )}
        </div>
    );
};
export default Cart;
