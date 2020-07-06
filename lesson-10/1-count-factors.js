/*
A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

    function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].
*/

function solution(N) {
  let factors = 0;

  let squareRootN = Math.sqrt(N);
  if (Math.pow(Math.trunc(squareRootN), 2) === N) {
    factors++;
  }

  for (let i = 1; i < squareRootN; i++) {
    if (N % i === 0) {
      factors += 2;
    }
  }
  return factors;
}

function solutionBig(N) {
  let factors = 0;
  for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
      //      console.log(N, i, N / i)
      factors++
    }
  }
  return factors;
}


let allGood = true;
function showResults(N, expected) {
  const factors = solution(N);
  const resOK = isEqual(factors, expected);
  if (!resOK) {
    allGood = false;
    console.log(resOK, factors, expected, N);
  }
  /*
    const expected2 = solutionBig(N);
    const resOK2 = isEqual(factors, expected2);
    if (!resOK2) {
      allGood = false;
      console.log(resOK2, factors, expected2, N);
    }*/

}

console.log('START');

showResults(1, 1);
showResults(2, 2);
showResults(3, 2);
showResults(4, 3);
showResults(5, 2);
showResults(6, 4);
showResults(7, 2);
showResults(8, 4);
showResults(9, 3);
showResults(260, 12);
showResults(24, 8);

showResults(41, 2);

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')

