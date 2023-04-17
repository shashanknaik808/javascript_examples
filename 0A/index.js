/*console.log("Hello World");
console.log('My name is Shashank');
console.log(1987);
console.log(true);
console.log(false);*/
// console.log("Hello World"); // Single line comment

// There are 6 primary datatypes in javascript
// a) Number b)String c)Boolean d)Null e)Undefined f)Object

/*console.log(5); //Number datatype
console.log(25.69);

console.log('Javascript'); // String
console.log('My name is Shashank'); // String

console.log(5 > 6); // Result is Boolean
console.log(5 <= 25); */

/*
var a = null; //Asigning Null
console.log(a); // Output is Null

var b; // Not definig anything
console.log(b); //Output is undefined
*/

/*
console.log(76 + 68); // Addition
console.log(45 - 34); //Substraction
console.log(65 * 55); // Multiplication
console.log(65 / 55); // Division-Quotient
console.log(65 % 55); // Modulo - Remainder 
*/

/*
//String Concatenation
console.log('Hello' + 'World'); //HelloWorld
console.log('Hello' + ' ' + 'World'); //Hello World

//String length
console.log('Hello'.length); //5
console.log('My name is Anthony Gonsalves'.length); //28
*/

/*
console.log('Hello'.toUpperCase());  //HELLO
console.log('VaNaKKam'.toLowerCase()); //vanakkam
console.log('Super Ranga'.startsWith('S')); // true
console.log('Super Ranga'.startsWith('R')); // false
console.log('        No Space Please                '.trim()); 
*/

/*
// Built-in Objects
console.log(Math.random()); // Generates random number b/w 0 to 1
console.log(Math.floor(46.7878)); // 46
console.log(Math.ceil(46.7878)); //47
console.log(Number.isInteger(45)); //true
console.log(Number.isInteger(45.666)); //false 
*/

// Generate a random num. b/w 0 to 75.
// console.log(Math.ceil(Math.random() * 75));

/*
// Generate a dice programm b/w 1 to 6
let num = Math.random() * 7;
let rou = Math.floor(num);
if (rou === 0) {
    console.log("try again");
}
else {
    console.log(rou);
}
*/

/*
// Create and use varibles
var myName = 'Balaji';
var myAge = 35;

console.log(myName);  //Balaji
console.log(myAge); //35
console.log('My name is ' + myName + ' & my age is ' + myAge);
// My name is Balaji & my age is 35
*/

/*
// Local varibles
let myName = "Kishan";
let age = 3;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & my age is ' + age);
*/

/*
let myWife = "Suma";
let age = 30;

console.log(myWife);
console.log(age);
console.log('My wife name is ' + myWife + ' & her age is ' + age);
*/

//The operator has 2 operands and it is called Binary operator
// var a = 5 + 6; var b = 7 - 4; var c = a * b;

// Operator has 3 operands , then it is Ternary operator 
// var c = (condition) ? 55 : 65;

/*
// Operator has only 1 operands , then it is Unary operator
var num = 55; // Assignment Operators

num += 10; // 65 | Equivalent: num = num + 10;
num -= 20; // 45 | Equivalent: num = num - 20;
num *= 100; // 4500 | Equivalent: num = num * 100;
num /= 50; // 90 | Equivalent: num = num / 50;
num %= 4; // 2 | Equivalent: num = num % 4;
*/

/*
// Increment and decrement operator
let year = 1987;
year++;
console.log(year); //1988
year--;
year--;
year--;
console.log(year); //1985
*/

/*
// String Concatenation vs Interpolation
let myName = 'Balaji';
let age = 35;

console.log('My name is ' + myName + ' & my age is ' + age);

console.log(`My name is ${myName} & my age is : ${age}`);
*/

/*
// typeof keyword
// used to know type of the varibles
// not strictly type checked
// any type of value can fit 
let foo = 'Super Man';
console.log(typeof foo);  //string

foo = 1985;
console.log(typeof foo); //number

foo = 55.68;
console.log(typeof foo); //number

foo = 100 > 200;
console.log(typeof foo); //boolean
*/