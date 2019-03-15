
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter thy string:\n", (input) => {
    doIt(input);
    readline.close()
})

function doIt(s) {
    var splitted = s.split(" ");
    var longestWord = "";
    var totalNumber = 0;
    splitted.forEach(word => {
        var cleanWord = word.replace(/([^a-z\-]+)/gi, "");
        var cleanNumString = word.replace(/([^0-9]+)/gi, "");
        if (cleanNumString != "") {
            totalNumber += parseInt(cleanNumString, 10);
        }
        if (longestWord == "") {
            longestWord = cleanWord;
        } else {
            if (cleanWord.length > longestWord.length)
                longestWord = cleanWord;
        }
    });

    console.log("---------------------")
    console.log("Total:", totalNumber);
    console.log("Longest:",longestWord);
    console.log("_____________________")
}