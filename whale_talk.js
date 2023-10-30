let input = "I know more today than I did yesterday.";
// console.log(input);
const inputToLowerCase = input.toLowerCase();
const inputEachLetter = inputToLowerCase.split("");
// console.log(inputEachLetter);
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

let whaleTranslator = function whaleTranslator() {
    for (let i = 0; i < inputEachLetter.length; i++) {
    // console.log(inputEachLetter.length);
    // console.log(i);
        let letter = inputEachLetter[i];
        // console.log(letter);
        for (let j = 0; j < vowels.length; j++) {
            // console.log(j);
            let vowel = vowels[j];
            // console.log(vowel);
            if (letter === vowel) {
                // console.log(letter);
                resultArray.push(vowel);
            };
    };
    if (letter === "e") {
        resultArray.push(letter);
    };
    if (letter === "u") {
        resultArray.push(letter);
    };
};
};
whaleTranslator();
// console.log(resultArray);
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
