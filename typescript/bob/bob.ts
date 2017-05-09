export default class Bob {
    hey(s: string) {
        s = s.trim()
        if (this.isUpper(s)) {
            return "Whoa, chill out!"
        } else if (s.endsWith('?')) {
            return "Sure."
        } else if (!s) {
            return "Fine. Be that way!"
        } else {
            return "Whatever."
        }
    }

    private isUpper(s: string): boolean {
        if (s === s.toUpperCase()) {
            return /[a-z]/i.test(s)
        } else {
            return false
        }
    }
}