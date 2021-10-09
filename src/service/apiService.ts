import mockedProductList from '../mocks/mockedProductList';
import mockedComputeToll from '../mocks/mockedComputeToll';
import { ProductProps } from '../components/productCardComponent/productCardComponent';

export const fetchProducts: () => Promise<{ data: any }> = async () => {
    // TODO write a httpService to handle real API calls
    return Promise.resolve({ data: mockedProductList });
};

export const computeToll: (subTotal: number) => Promise<{ data: number }> = async subTotal => {
    return Promise.resolve({ data: mockedComputeToll(subTotal) });
};

export const putOrder: (products: ProductProps[]) => Promise<any> = async products => {
    // TODO set products as payload
    return Promise.resolve({ statue: 200 });
};
