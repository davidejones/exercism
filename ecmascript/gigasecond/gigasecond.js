export default class Gigasecond {
    constructor(date) {
        this.calculatedDate = date;
        this.calculatedDate = new Date(date.getTime() + 1000*1000000000);
    }

    date() {
        return this.calculatedDate;
    }
}