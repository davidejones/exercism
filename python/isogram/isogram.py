def is_isogram(word):
    """
    Determine if word is an isogram
    An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter.
        
    :param word: a word or phrase string
    :return: True if word is isogram and False if it isn't
    """
    filtered_word = ''.join(filter(str.isalpha, word)).lower()
    return not any([letter in filtered_word[i+1:] for i, letter in enumerate(filtered_word)])
