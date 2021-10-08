import React, { useMemo } from 'react';
import imageUrlHelper from '../../helper/imageUrlHelper';
import './productCardComponent.css';

export interface ProductCardProps {
    product: { title: string; price: number; image: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

    return (
        <div className="productCardComponent">
            {productImage}
            <div className="productCardComponent__info">
                <span className="productCardComponent__title">{product.title}</span>
                <span className="productCardComponent__price">{`$ ${product.price}`}</span>
            </div>
        </div>
    );
};

export default ProductCard;
