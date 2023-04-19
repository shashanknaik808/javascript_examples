// 1. Higher Order Function
/*
const addTwoNumbers = (a, b) => {
    console.log(`Sum of two numbers: ${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;

addTwoNumbers(5, 6);
addMethod(5, 6);


//2. Printing Function Name

console.log(addTwoNumbers);

console.log(addMethod);

console.log(addTwoNumbers.name);

console.log(addMethod.name);
*/

//3. Call Back Function
/*
const sum = (param) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of Two numbers: $(x + y)`);       
}
//add(5, 6) //Aam zindagi
sum(add); //Mentos zindagi
*/

/*
//Mentos zindagi with a twist
const sum = (param, a, b) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of Two numbers: ${ x + y }`);
}

sum(add, 10, 15);
*/

//

//4. Iterators
// Iterators are methods used on arrays to work on the same.
// Some of the common Iterators are forEach(), map(), filter()
/*
//Aam Zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

let itrFruit = function(fruit) {
    console.log(`10 gms of ${fruit}`);
}

fruitSalad.forEach(itrFruit);
*/
/*
//Mentos  Zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

fruitSalad.forEach(function (fruit) {
    console.log(`10 gms of ${fruit}`);
});
*/

/*
//Mentos  Zindagi with Arrow Function
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

fruitSalad.forEach(fruit => {
    console.log(`10 gms of ${fruit}`);
});
*/


// 5. Map function
// forEach() pops out an element of an array & operates it
//map() works in the same way, but it returns a new array with added logic
/*
// Aam Zindagi
const numbers = [1, 2, 3, 5, 7];

const logic = function (num) {
    return num * num;
}
const squares = numbers.map(logic);

console.log(squares);
*/

/*
// Mentos Zindagi
const numbers = [1, 2, 3, 5, 7];

const squares = numbers.map(function (num) {
    return num * num;
});
console.log(squares);
*/

/*
// Mentos Zindagi with Arrow function
const numbers = [1, 2, 3, 5, 7];

const squares = numbers.map(num => {
    return num * num;
});
console.log(squares);
*/

/*
// Mentos Zindagi with Arrow function with twist
const numbers = [1, 2, 3, 5, 7];

// const squares = numbers.map(num => {
//     return num * num;
// });
const squares = numbers.map(num => num * num)
console.log(squares);
*/

/*
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

let salad = fruitSalad.map(fruit => {
    return`10 gms of ${fruit}`
});
console.log(salad);
*/

// Filter Method
// Returns a new array after filtering elelments from array
// filter() returns an array of elements after filtering out certain elements
// callback fun (logic method) for filter() should return true or false
/*
// Aam Zindagi
const mixedArray = ['apple', 'banana', 5.8, 8, 'kiwi', '3.147', 9.5, '25'];

const logic = function (item) {
    if (typeof item == 'number') {
        return true;
    }
    else {
        return false;
    }
}
const num = mixedArray.filter(logic);
console.log(num);
*/

/*
// Mentos Zindagi
const mixedArray = ['apple', 'banana', 5.8, 8, 'kiwi', '3.147', 9.5, '25'];
 
const num = mixedArray.filter(function (item) {
    if (typeof item == 'number') {
        return true;
    }
    else {
        return false;
    }
});
console.log(num);
*/

/*
// Mentos Zindagi with arrow fun
const mixedArray = ['apple', 'banana', 5.8, 8, 'kiwi', '3.147', 9.5, '25'];
 
const num = mixedArray.filter(item => {
    if (typeof item == 'number') {
        return true;
    }
    else {
        return false;
    }
});
console.log(num);
*/
/*
// Mentos Zindagi with twist
const mixedArray = ['apple', 'banana', 5.8, 8, 'kiwi', '3.147', 9.5, '25'];
 
const num = mixedArray.filter((item) => {
   return (typeof item == 'number') ? true : false;
});
console.log(num);
*/

/*
//Mentos with namak
const mixedArray = ['apple', 'banana', 5.8, 8, 'kiwi', '3.147', 9.5, '25'];

const num = mixedArray.filter(item => (typeof item == 'number') ? true : false);
console.log(num);
*/

// Find Index Method
// findIndex() retrieves index of 1st element of array which matches with true condition in logic.
/*
const fruits = ['apple', 'pineapple', 'banana', 'orange', 'dragon-fruit', 'kiwi', 'custard'];

let fruitNum = fruits.findIndex((fruit) => {
    return fruit === 'orange'
});
console.log(fruitNum);

let fru = fruits.findIndex(fruit => fruit[3] === 'e');
console.log(fru);
*/


//Assignment
//sort()
/*
const num = [45, 250, 35, 1500, 650, 125];

num.sort((a, b) => {
    return a - b;
})
console.log(num);
*/

let fruits = ['mango', 'Grapefruit', 'apple', 'dragon-fruit', 'Banana', 'Muskmelon', 'kiwi', 'grapes'];

fruits.sort((a, b) => {
    if (a.toLowerCase() < b.toUpperCase()) {
        return -1;
    }
    else if (a.toLowerCase() > b.toUpperCase()) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(fruits);
