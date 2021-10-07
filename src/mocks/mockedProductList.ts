const mockedProductList = [...Array(8)].map((u, i) => ({
    title: `item ${i + 1}`,
    price: Math.floor(Math.random() * 15),
    image: `${i + 1}.png`
}));
export default mockedProductList;