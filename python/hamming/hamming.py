def distance(nucleotide1, nucleotide2):
    """
    Calculate the Hamming difference between two DNA strands.
    
    :param nucleotide1: first dna strand string
    :param nucleotide2: second dna strand string
    :return: 
    """
    difference_count = 0
    if len(nucleotide1) != len(nucleotide2):
        raise ValueError('DNA strands must be of the same length')
    for nuc1, nuc2 in zip(nucleotide1, nucleotide2):
        if nuc1 != nuc2:
            difference_count += 1
    return difference_count
