export default class SpaceAge {
    seconds: number = 0

    constructor(seconds: number) {
        this.seconds = seconds
    }

    private _earth(): number {
        return this.seconds / 31557600
    }

    onEarth(): number {
        return +this._earth().toFixed(2)
    }

    onMercury(): number {
        return +(this._earth() / 0.2408467).toFixed(2)
    }

    onVenus(): number {
        return +(this._earth() / 0.61519726).toFixed(2)
    }

    onMars(): number {
        return +(this._earth() / 1.8808158).toFixed(2)
    }

    onJupiter(): number {
        return +(this._earth() / 11.862615).toFixed(2)
    }

    onSaturn(): number {
        return +(this._earth() / 29.447498).toFixed(2)
    }

    onUranus(): number {
        return +(this._earth() / 84.016846).toFixed(2)
    }

    onNeptune(): number {
        return +(this._earth() / 164.79132).toFixed(2)
    }
}