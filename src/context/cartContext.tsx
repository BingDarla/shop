import React, { createContext, useCallback, useContext, useState } from 'react';
import { ProductProps } from '../components/productCardComponent/productCardComponent';

export interface CartContextInterface {
    list: ProductProps[];
    addToCart?: (newItem: ProductProps) => void;
    emptyCart?: () => void;
    remove?: (product: ProductProps) => void;
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
    const emptyCart = useCallback(() => setList([]), []);

    const remove = useCallback(
        (product: ProductProps) => setList([...list].filter(item => item.title !== product.title)),
        [list]
    );

    return (
        <CartContext.Provider value={{ list, addToCart, emptyCart, remove }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
export const useCartContext: () => CartContextInterface = () => useContext(CartContext);
