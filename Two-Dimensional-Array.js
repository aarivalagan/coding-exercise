'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -Infinity
    for (let x = 0; x <= arr.length - 3; x++) {
        for (let y = 0; y <= arr.length - 3; y++) {
            // sum the top row
            let sum = arr[x][y] + arr[x][y + 1] + arr[x][y + 2]

            // sum the middle row
            sum += arr[x + 1][y + 1]

            // sum the bottom row
            sum += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2]

            max = Math.max(max, sum)
        }
    }
    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
