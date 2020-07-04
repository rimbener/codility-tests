// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const isValidSegment = segment => (!isNaN(segment) && segment < 256);
    const extractSegment = (curS, topIndex) => parseInt(curS.substring(0, topIndex));
    const extractRest = (curS, topIndex) => curS.substring(topIndex, curS.length);

    const snapshotIp = (validIp, S, curIndex, path, segment) => {
        if (segment === 4 && curIndex === S.length) {
            validIp.push(path[0] + '.' + path[1] + '.' + path[2] + '.' + path[3]);
            return;
        } else if (segment === 4 || curIndex === S.length) {
            return;
        }
        for (let len = 1; len <= 3 && curIndex + len <= S.length; len++) {
            const snapshot = S.substring(curIndex, curIndex + len);
            const value = parseInt(snapshot);
            if (value > 255 || len >= 2 && S.charAt(curIndex) === '0') {
                break;
            }
            path[segment] = value;
            snapshotIp(validIp, S, curIndex + len, path, segment + 1);
            path[segment] = -1;
        }
    }
    const validIp = [];
    snapshotIp(validIp, S, 0, [], 0);
    return validIp.length;
}

function showResults(S, expected) {
    const result = solution(S);
    const resOK = isEqual(result, expected);
    //    if (!resOK) {
    console.log(resOK, result, expected);
    //  }
}
showResults('4216712120', 2);
showResults('255255255255', 1);
showResults('188212', 8);

function isEqual(a, b) {
    return a === b;
}
