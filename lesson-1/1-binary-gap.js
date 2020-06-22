/*


A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For // example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
The number 20 has binary representation 10100 and contains one binary gap of length 1. 
The number 15 has binary representation 1111 and has no binary gaps. 
The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For // example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. 
Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].


*/
function solution(N) {
    const binaryNumber = toBinary(N);
    if (!binaryNumber.split('').includes('0')) {
        return 0;
    }

    const onlyZerosArray = getArrayOfZeros(binaryNumber);

    const finalArray = removeTrailingZeros(binaryNumber, onlyZerosArray);

    const max = Math.max(...zerosArrayToLengthArray(finalArray));
    return max | 0;
}

function toBinary(N) {
    return N.toString(2);
}

function zerosArrayToLengthArray(zerosArray) {
    return zerosArray.map(zeros => zeros.length);
}
function getArrayOfZeros(binaryNumber) {
    return binaryNumber.split('1').filter(item => item.length > 0);
}

function removeTrailingZeros(binaryNumber, onlyZerosArray) {
    if (binaryNumber[binaryNumber.length - 1] == 0) {
        return onlyZerosArray.slice(0, onlyZerosArray.length - 1);
    }
    return onlyZerosArray;
}

function showResults(N, expected) {
    const result = solution(N);
    if (result !== expected) {
        console.log(N, toBinary(N), result, result === expected);
    }
}
/*
showResults(1, 0);
showResults(5, 1);
showResults(6, 0);
showResults(328, 2);
showResults(5, 1);
showResults(16, 0);
showResults(1024, 0);
showResults(9, 2);
showResults(11, 1);
showResults(19, 2);
showResults(42, 1);
showResults(1162, 3);
showResults(51712, 2);
showResults(20, 1);
showResults(66561, 9);
showResults(6291457, 20);
showResults(74901729, 4);
showResults(805306373, 25);
showResults(1376796946, 5);
showResults(1073741825, 29);
showResults(1610612737, 28);
*/

// example1
showResults(1041, 5);
// example2
showResults(15, 0);
// example3
showResults(32, 0);
// simple1
showResults(9, 2);
// simple2
showResults(19, 2);
// simple3
showResults(1162, 3);
// medium1
showResults(51712, 2);
// medium2
showResults(561892, 3);
// medium3
showResults(66561, 9);
// large1
showResults(6291457, 20);
// large2
showResults(74901729, 4);
// large3
showResults(805306373, 25);
// large4
showResults(1376796946, 5);
// large5
showResults(1073741825, 29);
// large6
showResults(1610612737, 28);
