//Conditions and functions
/*
let flag = true;
if (flag) {
    console.log("Salute", "Salute", "Salute");
}
*/

/*
if (5 > 6) {
    console.log("Do Something!");
} 
else if (7 < 9) {
    console.log("Do Something Something!");
} 
else {
    console.log("Dont do Anything");
}
*/

/*
let a = 7;
let b = 5;

let flag = (a < 6) && (b === 5);
console.log(flag);
*/

// Non boolean if else conditions
/*
let flag = 55.5; // 45, 0, -5, "Super Man", "", " ", '', '0', null, undefined;

if(flag) {
    console.log("Flag is Truthy");
}
else {
    console.log("Flag is Falsy");
}
*/

/*
//Short-Circuit Assignment
let myName = '';
let person = myName || 'Nobody';
console.log(`You know, ${person} is a Good Boy`);
*/

/*
// Ternary Operator
let condition = 0; // It can be false, 0, "", '', null, any number, or any string
(condition) ? (console.log("First Statement")) : (console.log("Second Statement"));
var c = (condition) ? 55 : 65;
*/

//Switch Case

// let position = 'First Place';

// if (position === 'First Place') {
//     console.log("You will get Gold Medal");
// }
// else if (position === 'Second Place') {
//     console.log("You will get Silver Medal");
// }
// else if (position === 'Third Place') {
//     console.log("You will get Bronze Medal");
// }
// else {
//     console.log("Babaji ka Thullu");
// }

/*
let position = 'Second Place';

switch (position) {
    case 'First Place':
        console.log("You will get Gold Medal");
        break;

    case 'Second Place':
        console.log("You will get Silver Medal");
        break;

    case 'Third Place':
        console.log("You will get Third Medal");
        break;

    default:
        console.log("Baba ji ka thullu!!!");
        break;
}
*/

// Functions in JS
// Its a block of code with a name (identifier), perform set of formation
// Have various input & it will return 1 output

/*
function sayHello() {
    console.log("Hello Everyone");
    console.log("My name is Shashank");
}

function remindMe() {
    console.log("Water the plants");
}

sayHello();
sayHello();
sayHello();
remindMe();
remindMe();
*/

// Parameters and Arguements
// Inputs defined at start of the fun is Parameters
// ' ' ' ' values wdee pass while we invoke the fun is Arguements
/*
function sayHello(myName) {
    console.log("Hello Mr." + myName + "!How are you");
}

function sayNamaste(myName) {
    console.log(`Namaste ${myName}! Welcome Home`);
}

function areaOfRectangle(length, breadth) {
    let area = length * breadth;
    console.log(`Area of the rectangle is: ${area}`);
}

function areaOfTriangle(breadth, height) {
    let area = 0.5 * breadth * height;
    console.log(`Area of the rectangle is: ${area}`);
}

sayHello('Kishan');
sayNamaste('Suma');
areaOfRectangle(20, 10);
areaOfTriangle(20, 30);
*/

/*
// Default Arguements
function sayNamaste(myName= 'Random Person') {
    console.log(`Namste ${myName}! Welcome Home`);
}

function areaOfRectangle(length=10, breadth=10) {
    let area = length * breadth;
    console.log(`Area of the rectangle is: ${area}`);
}

function areaOfTriangle(b=5, h=5){
    let area = 0.5 * b * h;
   console.log(`Area of the triangle is: ${area}`);
}

sayNamaste();
areaOfRectangle(10);
areaOfTriangle(10);
*/

/*
//  Return statement
function areaOfRectangle(length = 10, breath = 10) {
    let area = length * breath;
    console.log(`Area of rectangle is: ${area}`);
}

function areaOfTriangle(b, h){
    let area = 0.5 * b * h;
    return area;
}

areaOfRectangle(15, 20);
var triangleArea = areaOfTriangle(10, 15);
console.log(`Area of triangle is: ${triangleArea}`);
*/

/*
// Helper Function 
// Invoking 1 functtion in another function (Helper function)

function mangoWeight(count){
    return count * 0.25;
}

function mangoCost(count){
    return mangoWeight(count) * 175;
}

var costOfMangos = mangoCost(25);
console.log(`Cost of 25 mangoes is: Rs.${costOfMangos} only/-`);
console.log("Cost of 35 mangoes is: Rs." + mangoCost(35) + " only/-");
console.log(`Cost of 45 mangoes is: Rs.${mangoCost(45)} only/-`);
*/


/*
// Function expression(Anonymous Functions)
fun exprsn is nothing but a fun object
we dont name anything is called anonymous functions
we can transform fun object to some other var, & start invoking fun by that name

function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}

var triangleArea = function (b, h) {
    let area = 0.5 * b * h;
    return area;
}

console.log(`Area using Function: ${areaOfTriangle(10, 15)}`);
console.log(`Area using Function Expression: ${triangleArea(5, 7)}`);
*/

/*
// Transfer Function Expression

var triangleArea = function (b, h) {
    let area = 0.5 * b * h;
    return area;
}

var area = triangleArea;
triangleArea = null;

console.log(`Using 'area' Variable: ${area(5, 7)}`);
// Valid & will get output
console.log(`Using 'triangleArea' Variable: ${triangleArea(5, 7)}`);
// will lead to error as 'triangleArea'
*/

/*
// Arrow head functions

var  triangleArea = (base, height) => {
    let area = 0.5 * base * height;
    return area;
}

var sayHello = () => {
    console.log("Hello Everyone");
}

var sayNamaste = myName => {
    console.log(`Namaste ${myName}! Welcome Home`);
}

console.log(`Area of triangle is: ${triangleArea(5, 8)}`);
sayHello();
sayNamaste("Suma");
*/

/*
// Concise body (Arrow fun)
var  triangleArea = (base, height) => {
    let area = 0.5 * base * height;
    return area;
}

 var triangleArea = (base, height) => 0.5 * base * height;

 console.log(`Area of triangle is: ${triangleArea(5, 6)}`);
*/

// Scope
// {..} demarcates scope in js
// var created inside a method or a a if, else if blocks , or parameters inside fun (using let) live & die after scope ends
// Global scopes are variables created outside any scoep, can be accessible
// Local scopes are var created inside those above mentiond blocks

/*
var valueOne = 10; // global scope (line no. 1 to end)
let valueTwo = 20; // global scope (line no. 1 to end)
const valueThree = 30; // global scope (line no. 1 to end)

function funA() {
    //Creating a local block within a function
    {
        var valueFour = 40; //function scope (line no.5 to 20)
        let valueFive = 50; // local block scope (line no. 7 to 10)
        const valueSix = 60; // local block scope (line no. 7 to 10)
    }

    console.log(valueOne); // Accessing Global Varibles inside Function
    console.log(valueTwo); // Accessing Global Varibles inside Function
    console.log(valueThree); // Accessing Global Varibles inside Function

    console.log(valueFour); // Accessing function Level Varibles inside a function
    console.log(valueFive); // Error: valueFive is not defined
    console.log(valueSix); // Error: valueSix is not defined
}

funA();
console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);
console.log(valueFour); // Error: valueFour is not defined
console.log(valueFive); // Error: valueFive is not defined
console.log(valueSix); // Error: valueSix is not defined
*/

/*
//Scope of Local Variable (var & let)

for (var i = 1; i <= 5; i++) {
    console.log("Hello World");
}

console.log(i); // i is accessible even outside.

for (let j = 1; j <= 5; j++) {
    console.log("I love you");
}

console.log(j); // j is not accessible outside the block
*/