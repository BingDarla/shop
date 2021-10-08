import React, { createContext, useCallback, useContext, useState } from 'react';
import { ProductProps } from '../components/productCardComponent/productCardComponent';

export interface CartContextInterface {
    list: ProductProps[];
    addToCart?: (newItem: ProductProps) => void;
}

export const CartContext = createContext<CartContextInterface>({
    list: []
});

const CartProvider: React.FC = ({ children }) => {
    const [list, setList] = useState<ProductProps[]>([]);
    const addToCart = useCallback(
        (newItem: ProductProps) => setList(prevList => [...prevList, newItem]),
        []
    );

    return <CartContext.Provider value={{ list, addToCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
export const useCartContext: () => CartContextInterface = () => useContext(CartContext);
