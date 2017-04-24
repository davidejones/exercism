def to_rna(nucleotides):
    """
    Given a DNA strand, return its transcribed RNA strand
    
    :param nucleotides: string of one or more characters in the range of G,C,T,A
    :return: string of one or more characters in the range of C,G,A,U
    """
    mapping = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    result = ''.join([mapping.get(nuc, '') for nuc in nucleotides])
    return result if len(result) == len(nucleotides) else ''

