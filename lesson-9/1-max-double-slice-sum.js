/*
A non-empty array A consisting of N integers is given.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

For example, array A such that:
    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2

contains the following example double slices:

        double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
        double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
        double slice (3, 4, 5), sum is 0.

The goal is to find the maximal sum of any double slice.

Write a function:

    function solution(A);

that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

For example, given:
    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2

the function should return 17, because no double slice of array A has a sum of greater than 17.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [3..100,000];
        each element of array A is an integer within the range [−10,000..10,000].
*/

function solution(A) {
  const N = A.length;
  const K1 = Array(N).fill(0);
  const K2 = Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    K1[i] = Math.max(K1[i - 1] + A[i], 0);
  }

  for (let i = N - 2; i > 0; i--) {
    K2[i] = Math.max(K2[i + 1] + A[i], 0);
  }

  let max = 0;

  for (let i = 1; i < N - 1; i++) {
    max = Math.max(max, K1[i - 1] + K2[i + 1]);
  }

  return max;
}

let allGood = true;
function showResults(A, expected) {
  const result = solution(A);
  const resOK = isEqual(result, expected);
  if (!resOK) {
    allGood = false;
    console.log(resOK, result, expected, A);
  }
}

console.log('START');

showResults([3, 2, 6, -1, 4, 5, -1, 2], 17);
showResults([5, 5, 5], 0);
showResults([3, 2, 6, -1, 4, 5, -1, 2], 17);
showResults([-2 - 3, 4, -1, -2, 1, 5, -3], 9);
showResults([1, 2, 3], 0);

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

