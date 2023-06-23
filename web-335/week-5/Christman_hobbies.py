#################################################
# Title: Exercise 5.3 - Python Conditions, Lists and Loops
# Author: Professor Richard Krasso
# Date: June 23, 2023
# Modified By: Michael Christman
# Description: For this assignment, we're creating conditions, an array, and a for loop to iterate over a list of hobbies and print all of the items in a string
# Sources Used: 
# W3Schools Python Loop Lists: https://www.w3schools.com/python/python_lists_loop.asp
# W3Schools Python If Else: https://www.w3schools.com/python/python_conditions.asp
#################################################

# I created an array/list of 5 different hobbies and included a print statement
hobbies = ["watching movies", "watching television", "watching basketball", "playing video games", "creating websites"]
print("My hobbies include: ")

# For this step, I've created a for loop to iterate over the array of hobbies and print all 5 hobbies in the list
for x in hobbies:
    print(x)

# I've included a print statement to print a blank line between the hobbies and days lists to improve legibility.
print()

# I created an array/list of the 7 days of the week and there are if and elif statements to print a string output for different conditions.
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# Using a for loop to iterate over the list & an if else statement to display the day & message.
for day in days:
    if day == "Sunday":
       print ("Today is Sunday. This is another free day where I can enjoy my hobbies and spend time with my family.")
    elif day == "Monday":
       print ("Today is Monday. It is the beginning of my college week and I get started on my course assignments.")
    elif day == "Tuesday":
       print ("Today is Tuesday. It is the second day of my college week and I continue on my course assignments.")
    elif day == "Wednesday":
       print ("Today is Wednesday. It is the first day of my work week and third day of my college week.")
    elif day == "Thursday":
       print ("Today is Thursday. It is the second day of my work week and fourth day of my college week.")
    elif day == "Friday":
        print ("Today is Friday. It is the last day of my work week and I complete my college assignments.")
    elif day == "Saturday":
        print ("Today is Saturday. I am off work and finished coursework for the week, so I enjoy my hobbies and spend time with family.")
