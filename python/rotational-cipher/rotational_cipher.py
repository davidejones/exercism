import re


def rotate(input, key):
    """
    Rotational/Caesar cipher
    The Caesar cipher is a simple shift cipher that relies on
    transposing all the letters in the alphabet using an integer key
    between `0` and `26`.
    
    :param input: string input 
    :param key: an integer key of how much to shift
    :return: 
    """
    if key == 0 or key == 26:
        return input
    new_string = ''
    for c in input:
        if re.match(r'[A-Za-z]', c):
            new_char = ord(c) + key
            if c.isupper() and new_char > 90:
                remaining = new_char - 90
                new_string += chr(64 + remaining)
            elif not c.isupper() and new_char > 122:
                remaining = new_char - 122
                new_string += chr(96 + remaining)
            else:
                new_string += chr(new_char)
        else:
            new_string += c
    return new_string
