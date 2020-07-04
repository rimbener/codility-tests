/*
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

        A[P] + A[Q] > A[R],
        A[Q] + A[R] > A[P],
        A[R] + A[P] > A[Q].

For example, consider array A such that:
  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20

Triplet (0, 2, 4) is triangular.

Write a function:

    function solution(A);

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:
  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20

the function should return 1, as explained above. Given array A such that:
  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1

the function should return 0.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

*/

function solution(A) {
  const checkIfTriangle = (P, Q, R) => {
    if ((P + Q) <= R) return false;
    if ((Q + R) <= P) return false;
    if ((R + P) <= Q) return false;
    return true;
  }

  const len = A.length;
  A.sort((a, b) => b - a);
  for (let i = 0; i < len - 2; i++) {
    const P = A[i];
    const Q = A[i + 1];
    const R = A[i + 2];
    if (checkIfTriangle(P, Q, R)) {
      return 1;
    }
  }
  return 0;
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

showResults([10, 2, 5, 1, 8, 20], 1);
showResults([10, 50, 5, 1], 0);
showResults([1, 1, 2, 3, 5], 0)

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

