/*
Write a function

    function solution(A);

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:
 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1

the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].
*/
function solution(A) {
  const objectOfUniques = A.reduce((prev, cur) => {
    if (prev[cur] === undefined) {
      prev[cur] = 1;
    }
    return prev;
  }, {});
  return Object.keys(objectOfUniques).length;
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

showResults([2, 1, 1, 2, 3, 1], 3);

function isEqual(a, b) {
  // if length is not equal 
  if (a.length != b.length)
    return false;
  else {
    // comapring each element of array 
    for (var i = 0; i < a.length; i++)
      if (a[i] != b[i]) return false;
    return true;
  }
}
if (allGood) console.log('ALL GOOD!!!')

