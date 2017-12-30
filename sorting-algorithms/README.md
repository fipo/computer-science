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

## Insertion Sort

We're going to start at the beginning of the list and assume we have a sorted list of length 1 where the first element is only sorted element. We're then going to grab the second element, and insert it into the correct spot in our sorted list, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. We now have a sorted list of length 2. We then continue on down the line, inserting elements in our sorted side of the list as the unsorted side dwindles.

https://btholt.github.io/four-semesters-of-cs/

```
[5, 3, 6]
[3, 5, 6]
```