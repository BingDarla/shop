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

    const { addToCart } = useCartContext();
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
            <div className="productCardComponent__Info">
                <span className="productCardComponent__title">{product.title}</span>
                <span className="productCardComponent__price">{`$ ${product.price}`}</span>
            </div>
            <Button variant="contained" onClick={onClick} endIcon={<AddShoppingCartIcon />}>
                ADD
            </Button>
        </div>
    );
};

export default ProductCard;
