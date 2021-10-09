import React, { createContext, useCallback, useContext, useState } from 'react';
import { ProductProps } from '../components/productCardComponent/productCardComponent';
import { computeToll } from '../service/apiService';

export interface CartContextInterface {
    list: ProductProps[];
    subTotal?: number;
    toll?: number;
    addToCart?: (newItem: ProductProps) => void;
    emptyCart?: () => void;
    remove?: (product: ProductProps) => void;
    hasAdded?: (product: ProductProps) => boolean;
    onUpdateToll?: () => void;
}

export const CartContext = createContext<CartContextInterface>({
    list: []
});

const CartProvider: React.FC = ({ children }) => {
    const [list, setList] = useState<ProductProps[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [toll, setToll] = useState<number>(0);

    const addToCart = useCallback((newItem: ProductProps) => {
        setList(prevList => [...prevList, newItem]);
        setSubTotal(prevSubTotal => prevSubTotal + newItem.price);
        setToll(0);
    }, []);
    const emptyCart = useCallback(() => setList([]), []);

    const remove = useCallback(
        (product: ProductProps) => {
            setList([...list].filter(item => item.title !== product.title));
            setSubTotal(prevSubTotal => prevSubTotal - product.price);
            setToll(0);
        },
        [list]
    );

    const hasAdded = useCallback((product: ProductProps) => [...list].includes(product), [list]);

    const onUpdateToll = useCallback(async () => {
        try {
            const response = await computeToll(subTotal);
            setToll(response?.data);
        } catch {
            console.log('some errors');
        }
    }, [subTotal]);

    return (
        <CartContext.Provider
            value={{
                list,
                addToCart,
                emptyCart,
                remove,
                hasAdded,
                subTotal,
                onUpdateToll,
                toll
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
export const useCartContext: () => CartContextInterface = () => useContext(CartContext);
