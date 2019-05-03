var newArray = [];

function additionalNum(num) {
  newArray.push(num);
  // return newArray;
}

function sorted() {
  // make a copy of the array
  var copyOfArray = newArray.slice();
  // sort the copied array
  copyOfArray.sort(function(a, b) {
    return (a - b);
  })
  // return the sorted copy
  return copyOfArray;
}
// var sortedNumbers = require("./sortingmodule.js")



//pushes numbers to a list (array)

module.exports =  {

  additionalNum: additionalNum,
  sorted: sorted

}


