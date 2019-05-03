var numberList = require("./creatingmodules.js");
var additionalNum = numberList.additionalNum;
var sorted = numberList.sorted;

// console.log ("List: " + newArray);


// var myArgv = process.argv.slice(2);


additionalNum(2);
additionalNum(400);
additionalNum(60);
additionalNum(70);
additionalNum(43);
additionalNum(82);

var finalList = sorted();

console.log("List ", finalList);

// sorts the numbers within that array in ascending order