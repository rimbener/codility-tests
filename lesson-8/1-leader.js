/*
An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that
 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3

The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

    function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that
 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3

the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
*/

function solution(A) {
  let result = { count: A.length / 2, index: -1 };

  const reduced = A.reduce((prev, cur, i) => {
    if (prev[cur] === undefined) {
      prev[cur] = {
        count: 1,
        index: i
      }
    } else {
      prev[cur].count++;
    }
    if (prev[cur].count > result.count) {
      result = {
        count: prev[cur].count,
        index: prev[cur].index
      }
    }
    return prev;
  }, {});

  return result.index !== undefined ? result.index : -1;
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

showResults([], [-1]);
showResults([1, 1, 2, 2, 2], [2]);
showResults([3, 4, 3, 2, 3, -1, 3, 3], [0, 2, 4, 6, 7]);

function isEqual(a, A) {
  return A.some(el => el === a);
}
if (allGood) console.log('ALL GOOD!!!')

