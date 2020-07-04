/*
You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

    function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:
  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8

the function should return 7. The figure shows one possible arrangement of seven blocks.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array H is an integer within the range [1..1,000,000,000].
*/

function solution(H) {
  let currHeight = H[0];
  let count = 1;
  const downStack = [H[0]];

  for (let i = 1; i < H.length; i++) {
    const el = H[i];

    if (el < currHeight) {
      while (downStack.length > 0){
        if (downStack[downStack.length - 1] <= el){
          break;
        }
        downStack.pop();
      }
      if (el !== downStack[0] && el !== downStack[downStack.length - 1]) {
        downStack.push(el);
        count++
      }
    } else if (el > currHeight) {
      downStack.push(el);
      count++
    }

    currHeight = el;
  }
  return count;
}

let allGood = true;
function showResults(H, expected) {
  const result = solution(H);
  const resOK = isEqual(result, expected);
  if (!resOK) {
    allGood = false;
    console.log(resOK, result, expected, H);
  }
}

console.log('START');

showResults([2, 5, 1, 4, 6, 7, 9, 10, 1], 8);
showResults([8, 8, 5, 7, 9, 8, 7, 4, 8], 7);
showResults([8, 8, 5, 7, 9, 8, 7, 5, 8], 6);
showResults([1, 2, 3, 4, 3], 4);
showResults([8, 8, 5], 2);
showResults([8,], 1);
showResults([8, 8], 1);
showResults([8, 8, 8, 8, 8], 1);
showResults([1000000000], 1);
showResults([1000000000, 2], 2);
showResults([2, 1000000000, 2], 2);
showResults([2, 3, 2], 2);
showResults([2, 1000000000, 2, 1000000000], 3);
showResults([2, 1000000000, 2, 1000000000, 1000000000], 3);

function isEqual(a, b) {
  return a === b;
}
if (allGood) console.log('ALL GOOD!!!')


