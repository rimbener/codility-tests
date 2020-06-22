/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

is a permutation, but array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3

is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

    function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

the function should return 1.

Given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3

the function should return 0.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [1..1,000,000,000].

*/
function solution(A) {
    aSize = A.length;
    const auxA = new Array(aSize).fill(false);
    for (let i = 0; i < aSize; i++) {
        if (A[i] > 0) {
            auxA[A[i] - 1] = true;
        }
    }
    if (auxA.indexOf(false) === -1) return 1
    else return 0;
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

showResults([4, 1, 3, 2], 1);
showResults([4, 1, 3], 0);

showResults(createTestArray(100, 51), 0);
showResults(createTestArray(500, 501), 1);
showResults(createTestArray(12456456, 123454), 0);

function createTestArray(length, missing) {
    let arr = [];
    for (let i = 1; i < length + 1; i++) {
        if (i !== missing) arr.push(i);
    }
    return arr;
}
function isEqual(a, b) {
    return a === b;
}
if (allGood) {
    console.log('ALL GOOD!!!')
}
