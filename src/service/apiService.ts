import mockedProductList from '../mocks/mockedProductList';

export const fetchProducts: () => Promise<{ data: any }> = async () => {
    return Promise.resolve({ data: mockedProductList });
};
