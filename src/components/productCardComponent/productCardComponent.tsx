import React, { useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../../context/cartContext';
import imageUrlHelper from '../../helper/imageUrlHelper';
import './productCardComponent.css';

export interface ProductProps {
    title: string;
    price: number;
    image: string;
    logo: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = props => {
    const { product } = props;
    const productImage = useMemo(
        () => (
            <img
                className="productCardComponent__image"
                src={imageUrlHelper(product.image)}
                alt={product.title}
            />
        ),
        [product]
    );

    const { addToCart, hasAdded } = useCartContext();
    const onClick = useCallback(
        (event: any) => {
            if (addToCart) {
                addToCart(product);
            }
            event.stopPropagation();
        },
        [addToCart, product]
    );

    return (
        <div className="productCardComponent">
            {productImage}
            <div className="u-info">
                <span className="u-tag">{product.title}</span>
                <span className="u-tag">{`$ ${product.price}`}</span>
            </div>
            <Button
                variant="contained"
                onClick={onClick}
                endIcon={<AddShoppingCartIcon />}
                disabled={hasAdded && hasAdded(product)}
            >
                ADD
            </Button>
        </div>
    );
};

export default ProductCard;
