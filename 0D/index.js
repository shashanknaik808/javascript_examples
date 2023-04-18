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