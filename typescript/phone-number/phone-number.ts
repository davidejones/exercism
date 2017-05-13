export default class PhoneNumber {
    private phone: string

    constructor(phone: string) {
        const isLetters = /[a-zA-Z]+/.test(phone)
        const isPunc = /[^a-zA-Z0-9_ .()-]+/.test(phone)
        const tempPhone = phone.replace(/\D/g, '')
        if (!isLetters) {
            if (!isPunc) {
                if (tempPhone.length !== 9 && tempPhone.length !== 12 && tempPhone.length !== 11) {
                    this.phone = tempPhone
                } else if (tempPhone.length === 11 && tempPhone.startsWith('1')) {
                    this.phone = tempPhone.substring(1, tempPhone.length)
                }
            }
        }
    }

    number() {
        return this.phone
    }
}