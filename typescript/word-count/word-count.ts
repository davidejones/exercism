export default class Words {
    count(phrase: string): Object {
        const results: { [s: string]: number; } = {}
        phrase.trim().toLowerCase().split(/[\s]/).filter((s) => s !== '').map((word: string) => {
            results[word] = (results.hasOwnProperty(word)) ? results[word] + 1 : 1
        })
        return new Map(Object.entries(results))
    }
}