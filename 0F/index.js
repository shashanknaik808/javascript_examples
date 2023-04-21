// 06 - Call, Apply & Bind
/*
let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

personOne.printName();
personTwo.printName();
*/

// Fucntion Borrowing
/*
let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',

}

personOne.printName.call(personTwo);
*/

// Approach 2 . Aam Zindagi
/*
let printName = function (obj) {
    console.log(obj.firstName + " " + obj.lastName);
}

let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',
}

printName(personOne);
printName(personTwo);
*/

//Mentos Zindagi
/*
let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',
}

printName.call(personOne);
printName.call(personTwo);
*/

// Approach 3 . Mentos Zindagi
/*
let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',
}

let printName = function (hometown, state) {
    console.log(` \n ${this.firstName} ${this.lastName}
    From ${hometown}, ${state}`);
}

printName.call(personOne, 'Bengaluru', 'Karnataka');
printName.call(personTwo, 'Mumbai');
*/

//Apply Method 
// Mentos Zindagi with a twist
/*
let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',
}

let printName = function (hometown, state) {
    console.log(` \n ${this.firstName} ${this.lastName}
    From ${hometown}, ${state}`);
}

printName.apply(personOne, ['Bengaluru', 'Karnataka']);
printName.apply(personTwo, ['Mumbai']);
*/

// Call & Apply
//call() method is using 'pass by reference' as we pass the object on which the method is to be called(with some addtional parameters:comma seperated)
//apply() method is using 'pass by reference' as we pass the object on which the method is to be called(with some addtional parameters:as an array)

// Bind Function Execution
/*
let personOne = {
    firstName: 'Agni',
    lastName: 'UPS',
}

let personTwo = {
    firstName: 'Sachin',
    lastName: 'TNDKR',
}

let printName = function (hometown, state) {
    console.log(` \n ${this.firstName} ${this.lastName}
    From ${hometown}, ${state}`);
}

let f1 = printName.bind(personOne, 'Bengaluru', 'Karnataka').call();
let f2 = printName.bind(personTwo, 'Mumbai').call();

// console.log(f1);
// console.log(f2);

// f1();
// f2();
*/