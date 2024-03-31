let word = "aspire systems ";

//length
var wordLen = word.length;
console.log(wordLen);

//charAt
var lastChar = word.charAt(word - 1);
console.log(lastChar);

// concatenation
var location = "at siruseri";
console.log(word+location);

//indexof && lastindexof
var sample = "hi there hi";
console.log(sample.indexOf("there")); 
console.log(sample.lastIndexOf("hi"));

//slice
let sampleString = "IFET college";
let subString = sampleString.slice(5);
console.log(subString);

//substring
var firstWord = sampleString.substring(0, 4);
console.log(firstWord);

//toupper && toLower
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());

//replace
console.log(location.replace("siruseri", "kochi"));