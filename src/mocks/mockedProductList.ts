const mockedProductList = [...Array(9)].map((u, i) => ({
    title: `item ${i + 1}`,
    price: Math.floor(Math.random() * 20) + 4,
    image: `${i + 1}.png`,
    logo: `${i + 1}logo.png`
}));
export default mockedProductList;
