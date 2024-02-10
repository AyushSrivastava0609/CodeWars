Intuition:-

The function sumOfMinimums aims to calculate the sum of the minimum elements in each subarray of a given 2D array arr.

Approach:-

Initialization:
We initialize an empty array res to store the minimum elements of each subarray.

Iterating through Subarrays:
We loop through each subarray of the input arr.

Finding Minimum Element:
Within each iteration, we use the spread operator (...) along with Math.min to find the minimum element in the current subarray.
The minimum element is then pushed into the res array.

Calculating Sum:
After processing all subarrays, we initialize a variable sum to store the sum of the minimum elements.
We iterate through the res array and add each minimum element to the sum.

Returning Result:
Finally, we return the calculated sum, which represents the sum of the minimum elements in all subarrays.

Note: This approach efficiently finds the sum of the minimum elements in each subarray without modifying the original array arr.




