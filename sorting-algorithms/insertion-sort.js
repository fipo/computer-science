/*
  Insertion sort!
  
  Be sure to call your function insertionSort.
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
*/

function insertionSort(nums) {
  let insertionSortCount = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      insertionSortCount++;
      if (nums[i] < nums[j]) {
        console.log(nums);
        // console.log(insertionSortCount);
        // The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
        // remove 1 item at i-index position
        const spliced = nums.splice(i, 1);
        // at j-index, don't remove anything, insert item
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  console.log(insertionSortCount);
}

// unit tests
// do not modify the below code
describe("insertion sort", function() {
  it("should sort correctly", () => {
    var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
