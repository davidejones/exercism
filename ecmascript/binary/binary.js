export default class Binary {

    constructor(binaryString) {
        this.base = 2;
        this.binaryString = binaryString;
        this.len = this.binaryString.length;
    }

    toDecimal() {
        if(!new RegExp(/^[0-1]+$/).test(this.binaryString)) return 0;
        return [...this.binaryString].map((char, index) => {
            return char * Math.pow(this.base, this.len-index-1);
        }).reduce((reduced, item) => reduced + item);
    }
}