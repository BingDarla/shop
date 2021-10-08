import React, { useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useProductList from '../../hooks/useProductList';
import Cart from '../cartComponent.tsx/cartComponent';
import ProductCard from '../productCardComponent/productCardComponent';
import './homeComponent.css';

const Home = () => {
    const { productList, isLoading } = useProductList();
    const [isCartClicked, setIsCartClicked] = useState<boolean>(false);

    return (
        <main className="homeComponent">
            <div className="homeComponent__heading">
                <h1>Online Shop</h1>
                <Button
                    variant="contained"
                    onClick={() => setIsCartClicked(!isCartClicked)}
                    startIcon={<ShoppingCartIcon />}
                >
                    CART
                </Button>

                {isCartClicked && (
                    <Cart isClicked={isCartClicked} onClose={() => setIsCartClicked(false)} />
                )}
            </div>
            <div className="homeComponent__products">
                {isLoading ? (
                    <div>Loading...</div>
                ) : Boolean(productList.length) ? (
                    <ol className="homeComponent__products-list">
                        {productList.map((product, index) => (
                            <li key={index} className="homeComponent__products-li">
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ol>
                ) : (
                    <div>NO PRODUCT</div>
                )}
            </div>
        </main>
    );
};

export default Home;
