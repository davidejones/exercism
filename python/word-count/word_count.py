from collections import Counter
import re


def word_count(sentence):
    """
    Given a phrase, count the occurrences of each word in that phrase.
    
    :param sentence: string sentence to count
    :return: dictionary of words and counts
    """
    words = list(filter(None, re.split(r'[\s\W_]', sentence.lower())))
    return Counter(words)
