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
    string_list = []
    for c in input:
        if c.isalpha():
            new_char = ord(c) + key
            if c.isupper() and new_char > ord('Z'):
                string_list.append(chr(64 + new_char - ord('Z')))
            elif not c.isupper() and new_char > ord('z'):
                string_list.append(chr(96 + new_char - ord('z')))
            else:
                string_list.append(chr(new_char))
        else:
            string_list.append(c)
    return ''.join(string_list)
