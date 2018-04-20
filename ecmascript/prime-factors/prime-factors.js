export default class PrimeFactors {

    getFactors(primeNumber, number) {
        let data = [];
        const n = primeNumber / number;
        if(primeNumber <= 1) return data;
        if(primeNumber % number === 0) {
            data.push(number);
            if(number !== 1) {
                data = data.concat(this.getFactors(n, number));
            }
        } else {
            data = data.concat(this.getFactors(primeNumber, number + 1));
        }
        return data;
    }

    for(primeNumber) {
        if(primeNumber <= 1) return [];
        return this.getFactors(primeNumber, 2);
    }

}