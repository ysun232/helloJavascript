/*
This is just a file that compiles some of the things
I do not want to look up
 */

//let is better than ? let is can be updated but not redeclared
//You cannot initialize let as an empty field
let x = 1;
x=2;
// let x=5; This doesnt work because x is already declared, but if you use let x in a function, it will work


var remainder = 10 % 3;
var quotationQuotes = "I am a \"double quoted value\", this is how it works";
var noNeedForQuotation = 'This is a better "String"';
var thisAlsoWorks  = `This is \n\t\'\"'String' "yes"`;
var a1 = thisAlsoWorks.length;
var secondLetterOfthisAlsoWorks = thisAlsoWorks[1]; //should return h
//Strings are immutable, you will have to reassign the variable to change it
function firstFunction(myNumber, myWord){
    var result = " " +myNumber + "\n\t" + myWord; //Need to add the spaces manually, there is no special function
    return result
}
// console.log(firstFunction(8,"Tuesday")); Should return 8 and Tuesday on a tabbed new line

var myArray = [["my universe", 20], ["nested arrays",99]];
// myArray[0] = "This replaced the first nested array"; //Replaces the first nested array
let secondElementFirstArray = myArray[0][1]; //should return 20 if i dont replace my nested array
myArray.push(["my name",19]);//this adds to the end of the array another array
myArray.pop();//removes the last element of the array, comment out this line to see the push action
myArray.shift();//removes the first element of the array
myArray.unshift("I become the first element now");//adds an element at the begining of the array;
console.log(myArray);


/*
\n new line
\t tab
\b backspace
\' single quote
\" double quote
\\ backslash
== equality !=
=== strict equality !==
&& and  || or
 */