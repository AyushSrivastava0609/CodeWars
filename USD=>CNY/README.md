Intuition:-

The function usdcny aims to convert a given amount of US dollars (USD) to Chinese Yuan (CNY) using the fixed exchange rate of 6.75 USD to 1 CNY. 
The goal is to return the converted amount with the currency symbol and unit appended.

Approach:

Multiply the input amount of USD by the fixed exchange rate of 6.75 to obtain the equivalent amount in CNY.
Use the toFixed(2) method to round the result to two decimal places, as currency values typically have two decimal places.
Concatenate the converted amount with the string " Chinese Yuan" to indicate the currency unit.
Return the concatenated string, representing the converted amount in CNY.
