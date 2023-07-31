module.exports = function toReadable (number) {
    const singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six","seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
      const tensWords = ["", "", "twenty", "thirty", "forty", "fifty", "sixty","seventy", "eighty", "ninety"];
    
      function changeThreeDigitsToWords(num) {
if (num === 0) {
return "";
} else if (num < 20) {
return singleDigitWords[num];
} else if (num < 100) {
const tensWord = tensWords[Math.floor(num / 10)];
const onesWord = num % 10 > 0 ? " " + singleDigitWords[num % 10] : "";
return tensWord + onesWord;
} else {
const hundredWord = singleDigitWords[Math.floor(num / 100)] + " hundred";
const remainderWord = num % 100 > 0 ? " " + changeThreeDigitsToWords(num % 100) : "";
return hundredWord + remainderWord;
 }
}
    
if (number === 0) {
return "zero";
}
let digitGroups = [];
while (number > 0) {
digitGroups.push(number % 1000);
number = Math.floor(number / 1000);
}
const suffixes = ["", " thousand", " million", " billion"];
let resultParts = digitGroups.map(changeThreeDigitsToWords);
let result = resultParts.map((part, index) => part.trim() + suffixes[index]).filter(part => part.trim() !== "").reverse().join(" ");
return result.trim();
}
