function solution(A) {
  console.log(A)
  let max_ending = 0;
  let max_slice = 0;
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    console.log('max_ending =', 'Math.max(', 0, max_ending + a, ') =', Math.max(0, max_ending + a));
    max_ending = Math.max(0, max_ending + a);
    console.log('max_slice =', 'Math.max(', max_slice, max_ending, ')=', Math.max(max_slice, max_ending))
    max_slice = Math.max(max_slice, max_ending);
  }

  return max_slice;
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

showResults([5, -7, 3, 5, -2, 4, -1], 10);

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

