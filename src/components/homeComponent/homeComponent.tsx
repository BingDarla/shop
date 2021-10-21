import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useProductList from '../../hooks/useProductList';
import Cart from '../cartComponent/cartComponent';
import ProductCard from '../productCardComponent/productCardComponent';
import { useCartContext } from '../../context/cartContext';
import './homeComponent.css';

const Home = () => {
    const { productList, isLoading } = useProductList();
    const { list } = useCartContext();
    const [isCartClicked, setIsCartClicked] = useState<boolean>(false);
    const homeClass = useMemo(
        () => classNames('homeComponent', { '--withCart': isCartClicked }),
        [isCartClicked]
    );

    return (
        <main className={homeClass}>
            <div className="homeComponent__heading">
                <h1>Online Shop</h1>
                {Boolean(list.length) && (
                    <Button
                        className="homeComponent__cart"
                        variant="contained"
                        onClick={() => setIsCartClicked(!isCartClicked)}
                        startIcon={<ShoppingCartIcon />}
                    >
                        CART
                    </Button>
                )}

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
