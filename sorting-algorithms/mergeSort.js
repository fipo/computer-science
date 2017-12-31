/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

const mergeSort = nums => {
  if (nums.length < 2) return nums;

  const middle = Math.floor(nums.length / 2); // .floor() returns the largest integer less than or equal to a given number.

  const left = nums.slice(0, middle); //.slice() returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift()); //.shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};

module.exports = mergeSort;
