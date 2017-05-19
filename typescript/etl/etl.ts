export default function transform(input: {[key: string]: string[]}): {[key: string]: number} {
    const output: {[key: string]: number} = {}
    Object.keys(input).map((key: string) => {
        input[key].forEach((letter: string) => output[letter.toLowerCase()] = +key)
    })
    return output
}