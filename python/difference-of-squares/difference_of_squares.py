from functools import reduce


def square_of_sum(amount):
    """
    The square of the sum: sums the natural numbers to the input amount and square it
    e.g (1 + 2 + ... + 10)² = 55² = 3025. where the input amount was 10
    
    :param amount: integer amount to square of sum
    :return: integer result amount
    """
    sequence = [x for x in range(1, amount + 1)]
    return reduce(lambda x, y: x+y, sequence, 0) ** 2


def sum_of_squares(amount):
    """
    The sum of the squares: sums the square of natural numbers to the input amount
    e.g 1² + 2² + ... + 10² = 385. where the input amount was 10
    
    :param amount: integer amount to sum of squares
    :return: integer result amount
    """
    return sum(x ** 2 for x in range(1, amount + 1))


def difference(amount):
    """
    The difference between the sum of squares and square of sum amounts
    
    :param amount: integer amount to use
    :return: integer result amount
    """
    return abs(sum_of_squares(amount) - square_of_sum(amount))
