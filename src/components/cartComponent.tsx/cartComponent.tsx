import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import './cartComponent.css';
import { useCartContext } from '../../context/cartContext';
import Button from '@mui/material/Button';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartCard from '../cartCardComponent/cartCardComponent';
import { useHistory } from 'react-router';
import { putOrder } from '../../service/apiService';

const Cart: React.FC<{ isClicked: boolean; onClose: () => void }> = ({ isClicked, onClose }) => {
    const cartClass = useMemo(
        () => classNames('cartComponent', { '--visible': isClicked }),
        [isClicked]
    );
    const { list, subTotal, onUpdateToll, toll } = useCartContext();
    const history = useHistory();

    const onSubmit = useCallback(async () => {
        try {
            await putOrder(list);
            history.push('./success');
        } catch {
            console.log('error in putting order');
        }
    }, [history, list]);

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
            {Boolean(subTotal) && (
                <div className="u-info">
                    <span className="u-tag">Subtotal (Excludes delivery)</span>
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
