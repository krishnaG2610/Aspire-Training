let array = ["ram","rajesh","kumar"];

//length
let len = array.length;
console.log(len)

//push && pop
array.push("ragul");
console.log(array);
array.pop();
console.log(array);

//delete
array.push("ragul");
delete array[3];
console.log(array);

//shift && unshift
array.shift();
console.log(array);
array.unshift("ram");
console.log(array);

//filter,forEach
array.filter(n=> n!==undefined).forEach( n => console.log(n));

//map,filter,reduce
let numArray = [1,2,3,4,5,6];
let result = numArray.filter(n=>n%2===0).map(n => n+2).reduce((a,b) => a+b );
console.log("Total is : " + result);

//indexof
console.log(array.indexOf("ram"));

//splice
let finalArray = numArray.splice(2,2);
console.log(finalArray);
console.log(numArray);

//split
let name = "hi aspire ssytems".split(" ");
console.log(name);
