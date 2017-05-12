export default class Pangram {
    private sentence: string = ''

    constructor(sentence: string) {
        this.sentence = sentence
    }

    isPangram(): boolean {
        return this.sentence.toLowerCase().split('').filter((val, index, self) => {
            return self.indexOf(val) === index && /^[a-zA-Z]+$/.test(val)
        }).length === 26
    }
}