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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    var s1_array = new Map(); var temp = 0; var result = "NO";
    for (var i = 0; i < s1.length; i++){
        s1_array.set(s1.charAt(i), i);
    }
    for (var j = 0; j < s2.length; j++) {
        var s2_array = s2.charAt(j);
        if (s1_array.has(s2_array)) {
            temp++;
        }
    }
    if (temp > 0) {
        result = "YES";
    }
    return result;
    //for (var z = 0; z<)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
