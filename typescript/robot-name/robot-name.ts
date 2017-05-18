export default class RobotName {
    private _name: string = ''
    private usedNames = new Set()

    set name(name: string) {
        throw new Error("Index Out of Bounds")
    }
    get name(): string { return this._name }

    constructor() {
        this._name = this.generateName()
        this.usedNames.add(this._name)
    }

    resetName() {
        let newName = this.generateName()
        while (this.usedNames.has(newName) || newName === this._name) {
            newName = this.generateName()
        }
        this._name = newName
        this.usedNames.add(this._name)
    }

    private generateName() {
        const chars: string = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ'
        const letters: string = chars.charAt(Math.floor(Math.random() * chars.length)) + chars.charAt(Math.floor(Math.random() * chars.length))
        const numbers: string = ("000" + Math.floor(Math.random() * 999) + 1).slice(-3)
        return letters + numbers
    }
}