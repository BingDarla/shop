import { useEffect, useState } from 'react';
import { fetchProducts } from '../service/apiService';

const useProducts = () => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchList() {
            setIsLoading(true);

            try {
                const response = await fetchProducts();
                setProductList(response?.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchList();
    }, []);

    return { productList, isLoading };
};

export default useProducts;
