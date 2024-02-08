Intuition:-

The problem requires warning the sheep about the imminent danger of being eaten by a wolf. The sheep are positioned in a queue, and the wolf is always at the end of the queue.
If a sheep is next to the wolf, it needs to be warned about the danger.

Approach:-

Finding the Position of the Wolf:
We find the position of the wolf in the queue using the indexOf method. 
Since the wolf is always at the end of the queue, we can directly find its index.

Calculating the Position of the Sheep:
We pop the last element from the queue, which represents the wolf's position.
We calculate the position of the sheep relative to the wolf by subtracting the wolf's index from the total number of sheep in the queue.
This gives us the position of the sheep in front of the wolf.

Checking if the Last Element is the Wolf:
If the last element of the queue (the popped element) is the wolf, it means the wolf is already at the end of the queue, so there are no sheep to warn.
In this case, we return a message indicating that the wolf should go away.

Returning the Warning Message:
If the last element is not the wolf, we construct a warning message to alert the sheep about the impending danger.
We use string interpolation to include the position of the sheep in the message.
Returning the Result:

We return the warning message, either indicating the position of the sheep or asking the wolf to go away, depending on the situation.
Overall, the approach efficiently handles the task of warning the sheep about the wolf's presence by determining the wolf's position in the queue and calculating the position of the sheep in front of the wolf. It then constructs and returns the appropriate warning message.





