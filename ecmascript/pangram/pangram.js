export default class Pangram {
    constructor(s) {
        this.input = s.toLowerCase().replace(/[^a-z]+/g, "");
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this.letterCount = [...this.alphabet]
            .map((c) => Object.assign({}, { [c]: 0 }))
            .reduce((reduced, next) => Object.assign(reduced, next));
    }

    isPangram() {
        [...this.input].forEach((c) => this.letterCount[c]++);
        return !Boolean(Object.values(this.letterCount).filter((num) => num < 1).length);
    }
}