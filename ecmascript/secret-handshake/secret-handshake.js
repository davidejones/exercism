export default class SecretHandshake {
    constructor(byte) {
        if(typeof byte !== "number") throw new Error('Handshake must be a number');
        this.byte = parseInt(byte);
        this.lookup = {
            1: ['wink'],
            2: ['double blink'],
            4: ['close your eyes'],
            8: ['jump']
        };
        this.reverseCode = parseInt(10000, 2);
    }

    commands() {
        let result = [];
        Object.keys(this.lookup).forEach((key) => {
            result = (key & this.byte) == key ? result.concat(this.lookup[key]) : result;
        });
        return (this.reverseCode & this.byte) == this.reverseCode ? result.reverse() : result;
    }
}