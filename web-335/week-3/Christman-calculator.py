#################################################
# Title: Exercise 3.3 - Python Variables and Functions
# Author: Professor Krasso
# Date: June 9th, 2023
# Modified By: Michael Christman
# Description: Created a calculator with Python code
#################################################

# A function which adds the sum of two numerical parameters.
num1 = 4
num2 = 4
def addSum(num1, num2):
    total = num1 + num2
    return total

result = addSum(num1, num2)
print("{} + {} is {}.".format(num1, num2, result))


# A function which subtracts the difference of two numerical parameters.
num3 = 10
num4 = 6

def subtractDiff(num3, num4):
    total = num3 - num4
    return total

result = subtractDiff(num3, num4)
print("{} - {} is {}.".format(num3, num4, result))


# A function which divides the quotient of two numerical parameters.
num5 = 8
num6 = 2

def divideQuo(num5, num6):
    total = num5 / num6
    return total

result = divideQuo(num1, num2)
print("{} / {} is {}.".format(num5, num6, result))


# A function which multiplies the product of two numerical parameters.
num7 = 10
num8 = 2

def multiplyProd(num7, num8):
    total = num7 * num8
    return total

result = multiplyProd(num7, num8)
print("{} * {} is {}.".format(num7, num8, result))


# This code calls each function and prints (returns) the results (output) via declared variables and string concatenation.
add_result = addSum(num1, num2)
print("The sum of " + str(num1) + " and " + str(num2) + " is " + str(add_result) + ".")

subtract_result = subtractDiff(num3, num4)
print("The difference between " + str(num3) + " and " + str(num4) + " is " + str(subtract_result) + ".")

divide_result = divideQuo(num5, num6)
print("The quotient of " + str(num5) + " by " + str(num6) + " is " + str(divide_result) + ".")

multiply_result = multiplyProd(num7, num8)
print("The product of " + str(num7) + " and " + str(num8) + " is " + str(multiply_result) + ".")
