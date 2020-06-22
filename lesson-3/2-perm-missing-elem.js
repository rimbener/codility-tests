/*


An array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], 
which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

    function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5

the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        the elements of A are all distinct;
        each element of array A is an integer within the range [1..(N + 1)].
*/

function solution(A) {
    if (A.length === 0) {
        return 1;
    }
    if (A.length === 1) {
        if (A[0] === 1) return 2;
        else return 1;
    }
    let newA = A.sort((a, b) => a - b);
    if (newA[0] !== 1) {
        return 1;
    }
    if (newA[newA.length - 1] !== (newA.length + 1)) {
        return newA.length + 1;
    }
    const timesToLoop = getBaseLog(newA.length) + 1;
    for (let i = 0; i < timesToLoop; i++) {
        if (newA.length > 1) {
            newA = wichHalf(newA);
        }
    }
    return (newA[0] + newA[1]) / 2;
}

function getBaseLog(y) {
    return Math.trunc(Math.log(y) / Math.log(2));
}

function wichHalf(array) {
    const arr1 = splitArray(array);
    if (!isComplete(arr1)) {
        return (arr1);
    }
    return array;
}

function isComplete(array) {
    return array[array.length - 1] === (array[0] + array.length - 1)
}

function splitArray(array) {
    middle = Math.trunc(array.length / 2) + 1;
    const resp = array.splice(0, middle);
    array.unshift(resp[resp.length - 1]);
    return resp;
}

function showResults(A, expected) {
    const result = solution(A);
    const resOK = isEqual(result, expected);
    if (!resOK) {
        console.log(resOK, result, expected);
    }
}

showResults(createTestArray(10, 1), 1);
showResults(createTestArray(10, 2), 2);
showResults(createTestArray(10, 3), 3);
showResults(createTestArray(10, 4), 4);
showResults(createTestArray(10, 5), 5);
showResults(createTestArray(10, 6), 6);
showResults(createTestArray(10, 7), 7);
showResults(createTestArray(10, 8), 8);
showResults(createTestArray(10, 9), 9);
showResults(createTestArray(10, 10), 10);

showResults([], 1);
showResults([2], 1);
showResults([1], 2);
showResults([2, 3, 4, 5], 1);
showResults([2, 3, 1, 4, 6, 7, 8], 5);
showResults([2, 3, 1, 5], 4);
showResults([1, 3], 2);

showResults(createTestArray(100, 51), 51);
showResults(createTestArray(500, 327), 327);
showResults(createTestArray(12456456, 123454), 123454);

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