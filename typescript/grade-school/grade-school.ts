export default class GradeSchool {
    private _rosterMap: { [n: number]: string[]; } = {}
    get rosterMap(): { [n: number]: string[]; } {
        Object.keys(this._rosterMap).map((key: string) => this._rosterMap[+key].sort())
        return this._rosterMap
    }
    set rosterMap(o: { [n: number]: string[]; }) { this._rosterMap = o }

    studentRoster(): Map<string, string[]> {
        return (this.rosterMap) ? new Map(Object.entries(this.rosterMap)) : new Map()
    }

    addStudent(s: string, n: number) {
        if (this._rosterMap.hasOwnProperty(n)) {
            this._rosterMap[n].push(s)
        } else {
            this._rosterMap[n] = [ s ]
        }
    }

    studentsInGrade(n: number): string[] {
        return (this.rosterMap[n]) ? this.rosterMap[n] : []
    }
}