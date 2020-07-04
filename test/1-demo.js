// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const rest = K % 7;
    const sIndex = weekDays.indexOf(S);
    let newIndex = sIndex + rest;
    if (newIndex > 6) {
        newIndex = newIndex - 7;
    }
    return weekDays[newIndex];
}

function showResults(S, K, expected) {
    const result = solution(S, K);
    const resOK = isEqual(result, expected);
    //    if (!resOK) {
    console.log(resOK, result, expected);
    //  }
}
console.log(38 % 7)
showResults('Mon', 0, 'Mon');
showResults('Thu', 0, 'Thu');
showResults('Mon', 7, 'Mon');
showResults('Wed', 7, 'Wed');
showResults('Wed', 2, 'Fri');
showResults('Sat', 23, 'Mon');
showResults('Sat', 38, 'Tue');
showResults('Sun', 500, 'Wed');
function isEqual(a, b) {
    return a === b;
}
