/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

        the elements at indexes 0 and 2 have value 9,     the elements at indexes 1 and 3 have value 3,     the elements at indexes 4 and 6 have value 9,     the element at index 5 has value 7 and is unpaired.

Write a function:

    function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

        N is an odd integer within the range [1..1,000,000];
        each element of array A is an integer within the range [1..1,000,000,000];
        all but one of the values in A occur an even number of times.


*/

function solution(A) {
    const acc = A.reduce((acc, cur) => {
        acc[cur] = acc[cur] !== undefined ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    const result = Object.keys(acc).filter(i => acc[i] % 2 === 1 ? acc[i] : false);
    return parseInt(result[0]) || 0;
}

let allGood = true;
function showResults(A, expected) {
    const result = solution(A);
    if (result !== expected) {
        allGood = false;
        console.log(resOK, A, result, expected);
    }
}

showResults([9, 3, 9, 3, 9, 7, 9], 7);
showResults([], 0);
showResults([9, 3], 3);
showResults([2, 2, 3, 3, 4], 4);
showResults([2, 1, 3, 2, 1, 2, 2, 3, 4], 4);
showResults([42], 42);
showResults([91, 69, 77, 91, 26, 64, 91, 88, 58, 17, 42, 100, 11, 32, 96, 45, 21, 32, 91, 34, 43, 63, 81, 50, 9, 58, 4, 10, 20, 70, 29, 70, 17, 12, 3, 71, 86, 22, 24, 2, 65, 31, 14, 65, 60, 45, 16, 64, 56, 44, 17, 93, 87, 69, 100, 59, 35, 12, 61, 52, 44, 100, 84, 12, 89, 1, 66, 32, 73, 96, 54, 77, 6, 67, 12, 46, 34, 8, 75, 10, 26, 9, 67, 31, 5, 3, 22, 51, 2, 3, 67, 53, 14, 32, 13, 28, 39, 22, 20, 23, 42, 91, 69, 77, 91, 26, 64, 91, 88, 58, 17, 42, 100, 11, 32, 96, 45, 21, 32, 91, 34, 43, 63, 81, 50, 9, 58, 4, 10, 20, 70, 29, 70, 17, 12, 3, 71, 86, 22, 24, 2, 65, 31, 14, 65, 60, 45, 16, 64, 56, 44, 17, 93, 87, 69, 100, 59, 35, 12, 61, 52, 44, 100, 84, 12, 89, 1, 66, 32, 73, 96, 54, 77, 6, 67, 12, 46, 34, 8, 75, 10, 26, 9, 67, 31, 5, 3, 22, 51, 2, 3, 67, 53, 14, 32, 13, 28, 39, 22, 20, 23], 42);

if (allGood) {
    console.log('ALL GOOD!!!')
}
