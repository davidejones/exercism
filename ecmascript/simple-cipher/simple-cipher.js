export default class Cipher {

    constructor(key) {
        if(!new RegExp(/^[a-z]+$/).test(key)) throw new Error("Bad key");
        this.key = key || this.generateKey();
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    }

    /**
     * Random range between integers, inclusive of min and max
     * @param {number} min - minimum integer for range
     * @param {number} max - maximum integer for range
     * returns integer
     */
    randRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generates a random key 10 chars long using a-z chars
     * @param {number} length - the length of string to generate
     * returns string
     */
    generateKey(length=10) {
        const min = 'a'.charCodeAt(0);
        const max = 'z'.charCodeAt(0);
        return Array(length).fill(0).map(() => String.fromCharCode(this.randRange(min, max))).join("");
    }

    /**
     * Lengthens the key by the size of the message
     * @param {string} s - the length of string to generate
     * returns string
     */
    lengthenKey(s) {
        let myIndex = -1;
        return [...s].map((c, index) => {
            myIndex++;
            if(myIndex > this.key.length-1) {
                myIndex = 0;
            }
            return this.key[myIndex];
        });
    }

    /**
     * Takes a string and shift decodes
     * @param {string} s - the string to decode
     * returns string
     */
    decode(s) {
        const longKey = this.lengthenKey(s);
        return [...s].map((c, index) => {
            let indx = this.alphabet.indexOf(c) - this.alphabet.indexOf(longKey[index]);
            if(indx < 0) indx += this.alphabet.length;
            return this.alphabet[indx];
        }).join("");
    }

    /**
     * Takes a string and shift encodes
     * @param {string} s - the string to encode
     * returns string
     */
    encode(s) {
        const longKey = this.lengthenKey(s);
        return [...s].map((c, index) => {
            let indx = this.alphabet.indexOf(c) + this.alphabet.indexOf(longKey[index]);
            if(indx >= this.alphabet.length) indx -= this.alphabet.length;
            return this.alphabet[indx];
        }).join("");
    }
}