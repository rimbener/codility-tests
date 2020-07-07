/*
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6

contains the following example triplets:

        (0, 1, 2), product is −3 * 1 * 2 = −6
        (1, 2, 4), product is 1 * 2 * 5 = 10
        (2, 4, 5), product is 2 * 5 * 6 = 60

Your goal is to find the maximal product of any triplet.

Write a function:

    function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6

the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [3..100,000];
        each element of array A is an integer within the range [−1,000..1,000].

*/
function solution(A) {
  A.sort((a, b) => a - b);
  const maxPositive = A[A.length - 3] * A[A.length - 2] * A[A.length - 1];
  const maxNegative = A[0] * A[1] * A[A.length - 1];
  return Math.max(maxNegative, maxPositive);
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

console.log('START');
showResults([-3, 1, 2, -2, 5, 6], 60);
showResults([-3, 7, 2, 1, 5, 7], 245);
showResults([-5, 5, -5, 4], 125);
showResults([-5, -6, -4, -7, -10], -120);

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

