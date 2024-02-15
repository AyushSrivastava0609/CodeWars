Intuition:-

The function aims to count the occurrences of each character in the input string and return an object containing the count for each unique character.

Approach:-

We initialize an empty object charCount to store the count of each character.
We iterate through each character char in the input string using a for...of loop.
For each character char, we check if it already exists as a key in the charCount object.
If it exists (charCount[char] is truthy), we increment its count by 1 (charCount[char]++).
If it doesn't exist (charCount[char] is falsy), we initialize its count to 1 (charCount[char] = 1).
After processing all characters in the string, we return the charCount object containing the count of each character.
