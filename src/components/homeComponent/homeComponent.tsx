import React from "react";
import useProductList from "../../hooks/useProductList";
import ProductCard from "../productCardComponent/productCardComponent";

const Home = () => {
  const { productList, isLoading } = useProductList();

  return (
    <main className="homeComponent">
      <div className="homeComponent__heading">
        <h1>Online Shop</h1>
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
