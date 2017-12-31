const medianValue = require('../sorting-algorithms/medianValue');

describe('find median element', () => {
  it('should find the median', () => {
    const arrayA = [1, 5, 8, 9]
    const arrayB = [2, 3, 7, 10]
    const median = medianValue(arrayA, arrayB)
    expect(median).toEqual(5)
  })
})