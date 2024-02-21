Intuition:-

The function nbYear aims to calculate the number of years required for a population to reach a certain threshold p,
given the initial population p0, the annual growth rate percent, and the number of new inhabitants arriving annually aug.

Approach:-

Initialize a variable years to track the number of years.
Use a loop to simulate the population growth until it reaches or exceeds the threshold p.
Inside the loop:
    Calculate the new population using the formula p0 + p0 * percent / 100 + aug.
    Update the value of p0 to the new population.
    Increment the years counter.
Return the number of years once the population exceeds or reaches the threshold p.
