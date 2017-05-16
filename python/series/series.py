def slices(input, n):
    """
    Given a string of digits, output all the contiguous substrings of length `n` in that string.
    
    :param input: string of numbers
    :param n: integer length to find contiguous substrings of
    :return: list of lists split by n
    """
    items = []
    if n > len(input):
        raise ValueError('Slice too long')
    elif n <= 0:
        raise ValueError('Slice too short')
    for i, item in enumerate(input):
        if i + n <= len(input):
            tmp = []
            for x in range(0, n):
                tmp.append(int(input[i + x]))
            items.append(tmp)
    return items