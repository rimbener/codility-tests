/*
A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:
    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2

we can find two equi leaders:

        0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
        2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.

The goal is to count the number of equi leaders.

Write a function:

    function solution(A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:
    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2

the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].

*/

function solution(A) {
  function isLeader(A) {
    let result = { count: A.length / 2, value: null };
    const reduced = A.reduce((prev, cur, i) => {
      if (prev[cur] === undefined) {
        prev[cur] = {
          count: 1,
          value: A[i]
        }
      } else {
        prev[cur].count++;
      }
      if (prev[cur].count > result.count) {
        result = {
          count: prev[cur].count,
          value: prev[cur].value
        }
      }
      return prev;
    }, {});

    return result.value;
  }

  let count = 0;
  for (let i = 0; i < A.length; i++) {
    const firstHalfLeader = isLeader(A.slice(0, i + 1));
    const secondHalfLeader = isLeader(A.slice(i + 1, A.length));
    if (firstHalfLeader !== null && secondHalfLeader !== null && firstHalfLeader === secondHalfLeader) {
      count++;
    }
  }
  return count;
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

showResults([0, 0], 1);
showResults([1, 2], 0);
showResults([], 0);
showResults([4, 3, 4, 4, 4, 2], 2);
showResults([4, 4, 2, 5, 3, 4, 4, 4], 3)

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

