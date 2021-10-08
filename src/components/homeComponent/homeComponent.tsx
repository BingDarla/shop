import React, { useState } from 'react';
import useProductList from '../../hooks/useProductList';
import ProductCard from '../productCardComponent/productCardComponent';
import './homeComponent.css';

const Home = () => {
    const { productList, isLoading } = useProductList();
    const [isCartClicked, setIsCartClicked] = useState<boolean>(false);

    return (
        <main className="homeComponent">
            <div className="homeComponent__heading">
                <h1>Online Shop</h1>
                <button onClick={() => setIsCartClicked(!isCartClicked)}>CART</button>
                {isCartClicked && <div>card display</div>}
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
