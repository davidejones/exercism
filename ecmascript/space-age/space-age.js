export default class SpaceAge {

    constructor(seconds) {
        this.seconds = seconds;
    }

    _earth() {
        return this.seconds / 31557600;
    }

    onEarth() {
        return +this._earth().toFixed(2);
    }

    onMercury() {
        return +(this._earth() / 0.2408467).toFixed(2);
    }

    onVenus() {
        return +(this._earth() / 0.61519726).toFixed(2);
    }

    onMars() {
        return +(this._earth() / 1.8808158).toFixed(2);
    }

    onJupiter() {
        return +(this._earth() / 11.862615).toFixed(2);
    }

    onSaturn() {
        return +(this._earth() / 29.447498).toFixed(2);
    }

    onUranus() {
        return +(this._earth() / 84.016846).toFixed(2);
    }

    onNeptune() {
        return +(this._earth() / 164.79132).toFixed(2);
    }
}