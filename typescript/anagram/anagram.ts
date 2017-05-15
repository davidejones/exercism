export default class Anagram {
    private word: string = ''
    private sortedWord: string = ''
    private sensitivityMask: number[] = []

    constructor(word: string) {
        this.word = word
        this.sortedWord = word.toLowerCase().split('').sort().join('')
        this.sensitivityMask = word.split('').map((char: string) => (char === char.toLowerCase()) ? 0 : 1)
    }

    matches(...matches: string[]): string[] {
        return matches
            .filter((word: string) => word.toLowerCase().split('').sort().join('') === this.sortedWord && this.word.toLowerCase() !== word.toLowerCase())
            .map((word: string) => {
                return word.split('').map((c: string, i: number) => (this.sensitivityMask[i] === 1) ? c.toUpperCase() : c.toLowerCase()).join('')
            })
    }
}