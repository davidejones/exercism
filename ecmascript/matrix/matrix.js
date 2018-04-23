export default class Matrix {
    constructor(matStr) {
        this.rows = [];
        this.columns = [];
        this.convert(matStr);
    }

    convert(matStr) {
        matStr.split("\n").forEach((r) => {
            const row = [];
            r.split(' ').forEach((c, i) => {
                if(!this.columns[i]) this.columns[i] = [];
                this.columns[i].push(+c);
                row.push(+c);
            });
            this.rows.push(row);
        });
    }
}