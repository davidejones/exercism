export default class Hamming {

    compute(strand1: string, strand2: string): number {
        let difference_count: number = 0
        const strand1_arr: string[] = strand1.split('')
        const strand2_arr: string[] = strand2.split('')
        if (strand1.length !== strand2.length) {
            throw new Error('DNA strands must be of equal length.')
        }
        strand1_arr.map((val, i) => {
            if (val !== strand2_arr[i]) {
                difference_count++
            }
        })
        return difference_count
    }
}