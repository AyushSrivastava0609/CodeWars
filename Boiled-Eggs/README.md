Intuition:
The function aims to determine the cooking time required to boil a certain number of eggs. 
Since multiple eggs can be boiled simultaneously in a pot, the cooking time increases as the number of eggs increases.

Approach:

Dividing Eggs into Batches:
Eggs are divided into batches, with each batch containing a maximum of 8 eggs. This is because it's practical to boil a few eggs together in a pot rather than each egg individually.

Calculating Cooking Time:
The function uses Math.ceil(eggs/8) to determine the number of batches required to cook all the eggs. Math.ceil ensures that even if there are fewer than 8 eggs, a full batch is counted.
For example, if there are 10 eggs, 2 batches are required (10/8 = 1.25, rounded up to 2).
Multiplying the number of batches by 5 gives the total cooking time in minutes. Each batch takes 5 minutes to cook.

Returning Cooking Time:
The calculated cooking time is returned by the function.
