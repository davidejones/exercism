export default class Beer {

    static verse(versenum: number): string {
        const bottle: string = (versenum === 0) ? 'No more bottles' : (versenum > 1) ? `${versenum} bottles` : `${versenum} bottle`
        const whatdown: string = (versenum === 1) ? 'it' : 'one'
        const action: string = (versenum === 0) ? 'Go to the store and buy some more' : `Take ${whatdown} down and pass it around`
        versenum = (versenum === 0) ? 99 : versenum - 1
        const nextbottle: string = (versenum === 0) ? 'No more bottles' : (versenum > 1) ? `${versenum} bottles` : `${versenum} bottle`
        return `${bottle} of beer on the wall, ${bottle.toLowerCase()} of beer.\n${action}, ${nextbottle.toLowerCase()} of beer on the wall.\n`
    }

    static sing(versenum: number = 99, versenum2: number = 0): string {
        const data: string[] = []
        for (let i: number = versenum; i >= versenum2; i--) {
            data.push(Beer.verse(i))
        }
        return data.join('\n')
    }
}