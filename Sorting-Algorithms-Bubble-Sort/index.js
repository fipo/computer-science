/*
  https://codepen.io/btholt/pen/rObwVZ
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
function bubbleSort1(nums) {
  let swapped
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
//Big O is n squared 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function bubbleSort2(nums) {
  nums.sort((a, b) => a - b);
}

// unit tests
// do not modify the below code
describe("bubble sort", function() {
  it("should sort correctly", () => {
    var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    bubbleSort1(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
