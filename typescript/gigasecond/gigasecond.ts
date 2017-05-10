export default class Gigasecond {
    private dt: Date

    constructor(dt: Date) {
        this.dt = dt;
        this.dt.setSeconds(this.dt.getSeconds() + 1e9)
    }

    date(): Date {
        return this.dt
    }
}