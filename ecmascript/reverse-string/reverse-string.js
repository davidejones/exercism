export default function reverseString(s) {
    const sArr = [...s];
    return sArr.map((c, i) => sArr[sArr.length - (i+1)]).join('');
}