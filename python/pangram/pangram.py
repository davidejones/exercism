def is_pangram(sentence):
    """
    Determine if a sentence is a pangram.
    A pangram is a sentence using every letter of the alphabet at least once.
    
    :param sentence: The input sentence string
    :return: True if sentence is a pangram and False if it is not
    """
    return len(list(filter(lambda x: x.isalpha(), set(sentence)))) == 26
