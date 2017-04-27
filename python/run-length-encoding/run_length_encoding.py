import re


def decode(encoded):
    """
    Run-length encoding (RLE), decode the encoded input to the repeating values
    
    :param encoded: RLE encoded string
    :return: decoded string
    """
    output = ''
    encoded = re.sub(r'[^A-Za-z0-9 ]', '', encoded)
    groups = filter(None, re.split(r'([0-9]+[A-Za-z ]{1}|[A-Za-z ]{1})', encoded))
    for item in groups:
        if len(item) > 1:
            count, letter = re.search(r'([0-9]+)([A-Za-z ]+)', item).groups()
            output += str(letter) * int(count)
        else:
            output += item
    return output


def encode(input_string):
    """
    Run-length encoding (RLE), replacing repeating chars by just one data value and count
    
    :param input_string: input string to encode 
    :return: output string in encoded format
    """
    output = ''
    sequence = []
    count = 1
    for i, char in enumerate(input_string):
        next_char = input_string[i+1:i+2]
        if char != next_char:
            sequence.append({char: count})
            count = 0
        count += 1
    for obj in sequence:
        for k, v in obj.items():
            output += '{0}{1}'.format('' if v == 1 else v, k)
    return output
