export default class Transcriptor {
    private mapping: { [s: string]: string; } = { G: 'C', C: 'G', T: 'A', A: 'U' }

    toRna(s: string): string {
        const mapKeys = Object.keys(this.mapping)
        return s.split('').map((char: string) => {
            if (mapKeys.indexOf(char) === -1) {
                throw new Error('Invalid input DNA.')
            }
            return this.mapping[char]
        }).join('')
    }
}