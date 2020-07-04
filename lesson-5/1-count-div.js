/*
Write a function:

    function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the 
range [A..B] that are divisible by K, i.e.:

    { i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, 
because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

        A and B are integers within the range [0..2,000,000,000];
        K is an integer within the range [1..2,000,000,000];
        A ≤ B.
*/

function solution(A, B, K) {
    let firstDivisible;
    for (let i = A; i < B + 1; i++) {
        if ((i % K) === 0) {
            firstDivisible = i;
            i = B + 1;
        }
    }
    if (firstDivisible === undefined) {
        return 0;
    }
    const res = Math.trunc((B - firstDivisible) / K) + 1;
    return res;
}

let allGood = true;
function showResults(A, B, K, expected) {
    const result = solution(A, B, K);
    const resOK = isEqual(result, expected);
    if (!resOK) {
        allGood = false;
        console.log(resOK, result, expected);
    }
}

console.log('START');
showResults(6, 11, 2, 3);
showResults(6, 19, 6, 3);
showResults(11, 11, 2, 0);
showResults(6, 11, 20, 0);
showResults(0, 2000000000, 1, 2000000001);

function isEqual(a, b) {
    return a === b;
}
if (allGood) {
    console.log('ALL GOOD!!!')
}
