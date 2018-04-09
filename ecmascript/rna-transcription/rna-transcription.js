class Transcriptor {
    toRna(nucleotides) {
        const data = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
        return [...nucleotides].map((n) => {
            if(!data.hasOwnProperty(n)) {
                throw new Error('Invalid input DNA.');
            }
            return data[n];
        }).join('');
    }
}

export default Transcriptor;