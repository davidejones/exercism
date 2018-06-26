export default class LinkedList {
    constructor() {
        this.data = [];
    }
    push(val) {
        this.data.push(val);
    }
    pop() {
        return this.data.pop();
    }
    shift() {
        return this.data.shift();
    }
    unshift(val) {
        return this.data.unshift(val);
    }
    count() {
        return this.data.length;
    }
    delete(val) {
        this.data = this.data.filter((x) => x !== val);
    }
}