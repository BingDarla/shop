const mockedProductList = [...Array(9)].map((u, i) => ({
    title: `item ${i + 1}`,
    price: Math.floor(Math.random() * 15) + 4,
    image: `${i + 1}.png`
}));
export default mockedProductList;
