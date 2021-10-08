import IconButton from '@mui/material/IconButton';
import React, { useCallback, useMemo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '../../context/cartContext';
import imageUrlHelper from '../../helper/imageUrlHelper';
import { ProductProps } from '../productCardComponent/productCardComponent';
import './cartCardComponent.css';

const CartCard: React.FC<{ item: ProductProps }> = props => {
    const { item } = props;
    const productImage = useMemo(
        () => (
            <img
                className="cartCardComponent__image"
                src={imageUrlHelper(item.logo)}
                alt={item.title}
            />
        ),
        [item]
    );

    const { remove } = useCartContext();
    const onClick = useCallback(
        (event: any) => {
            if (remove) {
                remove(item);
            }
            event.stopPropagation();
        },
        [remove, item]
    );

    return (
        <div className="cartCardComponent">
            {productImage}
            <div className="cartCardComponent__Info">
                <span className="cartCardComponent__tag">{item.title}</span>
                <span className="cartCardComponent__tag">{`$ ${item.price}`}</span>
            </div>
            <IconButton onClick={onClick} aria-label="remove">
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default CartCard;
