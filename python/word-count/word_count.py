from collections import defaultdict
import re


def word_count(sentence):
    """
    Given a phrase, count the occurrences of each word in that phrase.
    
    :param sentence: string sentence to count
    :return: dictionary of words and counts
    """
    word_counts = defaultdict(int)
    words = re.split(r'[\s\W_]', sentence.lower())
    for word in words:
        if word:
            word_counts[word] += 1
    return word_counts
