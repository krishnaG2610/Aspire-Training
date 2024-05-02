let students = ["ram","rajesh","kumar"];

//length
let len = students.length;
console.log(len)

//push && pop
students.push("ragul");
console.log(students);
students.pop();
console.log(students);

//delete
students.push("ragul");
delete students[3];
console.log(students);

//shift && unshift
students.shift();
console.log(students);
students.unshift("ram");
console.log(students);

//filter,forEach
students.filter(n=> n!==undefined).forEach( n => console.log(n));

//map,filter,reduce
let numArray = [1,2,3,4,5,6];
let result = numArray.filter(n=>n%2===0).map(n => n+2).reduce((a,b) => a+b );
console.log("Total is : " + result);

//indexof
console.log(students.indexOf("ram"));

//splice
let finalArray = numArray.splice(2,2);
console.log(finalArray);
console.log(numArray);

//split
let name = "hi aspire ssytems".split(" ");
console.log(name);
