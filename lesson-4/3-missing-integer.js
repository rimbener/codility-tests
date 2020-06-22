/*
This is a demo task.

Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(A) {
    aSize = A.length;
    const auxA = new Array(aSize).fill(false);
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            auxA[A[i] - 1] = true;
        }
    }
    let resu = auxA.indexOf(false);
    if (resu === -1) resu = aSize;
    return resu + 1;
}

let allGood = true;
function showResults(A, expected) {
    const result = solution(A);
    const resOK = isEqual(result, expected);
    if (!resOK) {
        allGood = false;
        console.log(resOK, result, expected);
    }
}

showResults([2, 3], 1);
showResults([], 1);
showResults([1], 2);
showResults([1, 3, 6, 4, 1, 2], 5);
showResults([1, 3, 6, 4, 1, 7], 2);
showResults([1, 2, 3], 4);
showResults([-1, -3], 1);

function isEqual(a, b) {
    return a === b;
}
if (allGood) {
    console.log('ALL GOOD!!!')
}
