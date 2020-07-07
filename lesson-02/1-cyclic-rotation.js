/*


An array A consisting of N integers is given. 
Rotation of the array means that each element is shifted right by one index, 
and the last element of the array is moved to the first place.
For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] 
(elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

    class Solution { public int[] solution(int[] A, int K); }

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given
    A = [3, 8, 9, 7, 6]
    K = 3

the function should return [9, 7, 6, 3, 8]. Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

For another example, given
    A = [0, 0, 0]
    K = 1

the function should return [0, 0, 0]

Given
    A = [1, 2, 3, 4]
    K = 4

the function should return [1, 2, 3, 4]

Assume that:

        N and K are integers within the range [0..100];
        each element of array A is an integer within the range [−1,000..1,000].

In your solution, focus on correctness. 
The performance of your solution will not be the focus of the assessment.
*/

function solution(A, K) {
    const timesToRotate = K % A.length;
    trailArr = [...A].splice(0, A.length - timesToRotate);
    initialArr = [...A].splice(A.length - timesToRotate, A.length);
    return [...initialArr, ...trailArr];
}

let allGood = true;
function showResults(A, K, expected) {
    const result = solution(A, K);
    const resOK = isEqual(result, expected);
    if (!resOK) {
        allGood = false;
        console.log(resOK, A, K, result, expected);
    }
}
showResults([3, 8, 9, 7, 6], 3, [9, 7, 6, 3, 8]);
showResults([0, 0, 0], 1, [0, 0, 0]);
showResults([1, 2, 3, 4], 4, [1, 2, 3, 4]);
showResults([], 4, []);
showResults([1], 0, [1]);
showResults([3, 8, 9, 7, 6], 0, [3, 8, 9, 7, 6]);
showResults([3, 8, 9, 7, 6], 1, [6, 3, 8, 9, 7]);
showResults([3, 8, 9, 7, 6], 2, [7, 6, 3, 8, 9]);
showResults([3, 8, 9, 7, 6], 3, [9, 7, 6, 3, 8]);
showResults([3, 8, 9, 7, 6], 4, [8, 9, 7, 6, 3]);
showResults([3, 8, 9, 7, 6], 5, [3, 8, 9, 7, 6]);
showResults([3, 8, 9, 7, 6], 6, [6, 3, 8, 9, 7]);
showResults([3, 8, 9, 7, 6], 7, [7, 6, 3, 8, 9]);
showResults([3, 8, 9, 7, 6], 8, [9, 7, 6, 3, 8]);
showResults([3, 8, 9, 7, 6], 9, [8, 9, 7, 6, 3]);
showResults([3, 8, 9, 7, 6], 10, [3, 8, 9, 7, 6]);
showResults([3, 8, 9, 7, 6], 11, [6, 3, 8, 9, 7]);

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
if (allGood) {
    console.log('ALL GOOD!!!')
}
// [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8] -> [7, 6, 3, 8, 9] -> [6, 3, 8, 9, 7]