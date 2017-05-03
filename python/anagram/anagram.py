from collections import Counter


def detect_anagrams(word, candidates):
    """
    Takes a word and a list of possible anagrams, and returns matches
    An anagram is a word, phrase, or sentence formed from another by rearranging its letters
    
    :param word: input string used to match against candidates
    :param candidates: a list of strings that may or may not be anagrams of input word
    :return: a list of valid anagram strings
    """
    word_counter = Counter(word.lower())
    results = []
    for candidate in candidates:
        if Counter(candidate.lower()) == word_counter and word.lower() != candidate.lower():
            results.append(candidate)
    return results
