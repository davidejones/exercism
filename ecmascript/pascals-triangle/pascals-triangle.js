export default class Triangle {

    constructor(size) {
        this.rows = [];
        this.lastRow = [];
        this.generateTriangle(size);
    }

    getItem(arr, indx) {
        return (indx < 0 || indx > arr.length-1) ? 0 : arr[indx];
    }

    getLeftRight(row) {
        const prevRow = this.rows[row - 1];
        const newRow = [];
        if(prevRow) {
            for(let i = 0; i <= prevRow.length; i++) {
                const right = this.getItem(prevRow, i);
                const left = this.getItem(prevRow, i-1);
                newRow.push(left + right);
            }
            return newRow;
        } else {
            return [1];
        }
    }

    generateTriangle(size) {
        for(let i = 0; i < size; i++) {
            this.rows.push(this.getLeftRight(i));
        }
        this.lastRow = this.rows[this.rows.length-1];
    }
}