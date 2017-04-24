def distance(nucleotide1, nucleotide2):
    """
    Calculate the Hamming difference between two DNA strands.
    
    :param nucleotide1: first dna strand string
    :param nucleotide2: second dna strand string
    :return: 
    """
    difference_count = 0
    if len(nucleotide1) != len(nucleotide2):
        raise ValueError
    for index, nuc in enumerate(nucleotide1):
        if nuc != nucleotide2[index]:
            difference_count += 1
    return difference_count
