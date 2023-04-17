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