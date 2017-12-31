# Sorting Algorithms

## Bubble Sort

Compare two numbers at the time and swap them if they are out of order.

more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```
[5,7,6,4]
[5,6,7,4]
[5,6,4,7]
[5,4,6,7]
[4,5,6,7]
```

> What's the Big O on this? Well, there's an inner loop to check to see if indexes need to be swapped, and an outer loop that's just checking to see if anything was swapped. That would be make it O(n²). Not efficient ...

## Insertion Sort

We're going to start at the beginning of the list and assume we have a sorted list of length 1 where the first element is only sorted element. We're then going to grab the second element, and insert it into the correct spot in our sorted list, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. We now have a sorted list of length 2. We then continue on down the line, inserting elements in our sorted side of the list as the unsorted side dwindles.

https://btholt.github.io/four-semesters-of-cs/

```
[5, 3, 6]
[3, 5, 6]
```

## Merge Sort

A key to merge sort is that it is recursive.

The basic gist of merge sort is that you're going to take your big list, and first divide down in two half size lists and recursively call merge sort on those smaller list, which in turn will do the same. The base case is when you have a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.

```
[1, 5, 6] sublist 1
[2, 7, 8] sublist 2

-> compare 1 and 2, take 1 and put it in new list
-> compare 5 and 2, take 2 and put it in new list
-> compare 5 and 7, take 5 and put it in new list
-> compare 6 and 7, take 6 and put it in new list
-> list one has no more elements
   add the rest of list two in order (7 and 8)
```

This combined merge with the divide-and-conquer recursion proves to be pretty effective. When you call Array.prototype.sort it often uses MergeSort (depending on the engine and the types of the elements in the array.) MergeSort is also stable which just means if you have equivalent elements, it will keep their original order in the array. This is sometimes important and sometimes not.

MergeSort's Big O is O(n log n). Weird, right? We obviously have to compare everything once, but we don't have to compare everything to everything like we do with bubble sort. Rather we just to have to compare to their local lists as we sort. Not too bad.

MergeSort's space complexity is a bit worse than the previous algorithms at O(n) since we have to create new lists as we go. It's not awful but it nonetheless a consideration.


https://www.youtube.com/watch?v=KF2j-9iSf4Q

## Quick Sort

Quicksort is one of the most useful and powerful sorting algorithms out there.

It's another recursive algorithm but it takes a slightly different approach.

The basic gist is that you take the last element in the list and call that the pivot.
Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list. 
You then call quick sort on the left and right lists independently (hence the recursion.) After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list (in that order.) The base case is when you have a list of length 1 or 0, where you just return the list given to you.

Another Big O of O(n log n) but takes up less memory than mergesort so it is often favored.

```
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
```