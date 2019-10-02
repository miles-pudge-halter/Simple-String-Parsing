"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var readStream = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout
});
readStream.question("Enter thy string:\n", function (input) {
    doIt(input);
    readStream.close();
});
function doIt(s) {
    var splitted = s.split(" ");
    var longestWord = "";
    var totalNumber = 0;
    splitted.forEach(function (word) {
        var cleanWord = word.replace(/([^a-z\-]+)/gi, "");
        var cleanNumString = word.replace(/([^0-9]+)/gi, "");
        if (cleanNumString != "") {
            totalNumber += parseInt(cleanNumString, 10);
        }
        if (longestWord == "") {
            longestWord = cleanWord;
        }
        else {
            if (cleanWord.length > longestWord.length)
                longestWord = cleanWord;
        }
    });
    console.log("---------------------");
    console.log("Total:", totalNumber);
    console.log("Longest:", longestWord);
    console.log("_____________________");
}
