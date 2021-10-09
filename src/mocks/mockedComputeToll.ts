export const mockedComputeToll: (total: number) => number = total => (total > 50 ? 20 : 10);
export default mockedComputeToll;
