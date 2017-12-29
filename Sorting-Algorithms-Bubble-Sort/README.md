# Sorting Algorithms

## Bubble Sort

Compare two numbers at the time and swap them if they are out of order.

more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

`[5,7,6,4]`
`[5,6,7,4]`
`[5,6,4,7]`
`[5,4,6,7]`
`[4,5,6,7]`

> What's the Big O on this? Well, there's an inner loop to check to see if indexes need to be swapped, and an outer loop that's just checking to see if anything was swapped. That would be make it O(n²). Not efficient ...