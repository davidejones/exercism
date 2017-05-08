export default class Hamming {

    compute(strand1: string, strand2: string): number {
        let difference_count: number = 0
        if (strand1.length !== strand2.length) {
            throw new Error('DNA strands must be of equal length.')
        }
        strand1.split('').map((char, i) => { (char !== strand2.charAt(i)) ? difference_count++ : '' })
        return difference_count
    }
}