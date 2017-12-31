const quickSort = require("../sorting-algorithms/quickSort");

describe("QuickSort spec", () => {
  it("should quick sort correctly", () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);

    expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});