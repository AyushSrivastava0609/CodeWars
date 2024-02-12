Intuition:-

The findShort function aims to find the length of the shortest word in a given string s.

Approach:-

Split String:
Split the input string s into an array of words using the space character as the delimiter. This creates an array string containing individual words.

Map Word Lengths:
Use the map method to iterate over each word in the string array.
Within the mapping function, return the length of each word.

Find Minimum Length:
After mapping, the resulting array res contains the lengths of all words in the string.
Use the Math.min function along with the spread operator (...) to find the minimum value among the lengths in res.

Return Minimum Length:
Return the minimum length found in step 3, which represents the length of the shortest word in the string s.

Note: This approach efficiently finds the length of the shortest word in the string by splitting the string into words, mapping their lengths, and then finding the minimum length among them. 
The use of array methods allows for concise and readable code.
