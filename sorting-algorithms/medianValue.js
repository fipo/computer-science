// Find the median element between two sorted arrays
// based on Merge Sort

const medianValue = (left, right) => {
  const totalCount = left.length + right.length;
  const medianIndex = Math.floor(totalCount / 2);
  return merge(left, right, medianIndex);
};

const merge = (left, right, index) => {
  let results = 0;
  for (let i = 0; i < index; i++) {
    results = left[0] <= right[0] ? left.shift() : right.shift();
  }
  return results;
};

module.exports = medianValue;
