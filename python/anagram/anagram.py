from collections import Counter


def detect_anagrams(word, candidates):
    """
    Takes a word and a list of possible anagrams, and returns matches
    An anagram is a word, phrase, or sentence formed from another by rearranging its letters
    
    :param word: input string used to match against candidates
    :param candidates: a list of strings that may or may not be anagrams of input word
    :return: a list of valid anagram strings
    """
    word_lower = word.lower()
    word_counter = Counter(word_lower)
    results = []
    for candidate in candidates:
        candidate_lower = candidate.lower()
        if Counter(candidate_lower) == word_counter and word_lower != candidate_lower:
            results.append(candidate)
    return results
