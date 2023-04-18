// 1. Arrays & Loops
// Arrays are data structure in js ,helps store value of same data-type in other lang, but multiple obj in js
/*
let southAsia = ['India', 'Pakistan', 'Bangladesh'];
console.log(southAsia); // [ 'India', 'Pakistan', 'Bangladesh' ]

let southAsia = [];
southAsia [0] = 'India';
southAsia [1] = 'Pakistan'; 
southAsia [2] = 'Bangladesh';
console.log(southAsia); // [ 'India', 'Pakistan', 'Bangladesh' ]
*/

//2. Accessing Arrays
/*
let southAsia = [ 'India', 'Pakistan', 'Bangladesh', 'Buthan', 'Burma', 'Nepal'];

southAsia[4] = 'Mayanmar';
console.log("Burma's name has changed to" + southAsia[4] + "recently");

let topEconomy = southAsia[0];
console.log(`Richest Economy in South Asia is ${topEconomy} !!`);

console.log(`If we try to access an array out of index we get : ${southAsia[7]}`);
*/

// 3. Const Arrays
// Can be altered from inside. We can add new elements using Array.push() method
// But cannot assign variable to some-pther array or random value. This will result in an error
/*
const northAmerica = ['Canada', 'United States of America', 'Mexico'];

northAmerica[1] = 'USA';
console.log(northAmerica);

northAmerica.push('Panama');
console.log(northAmerica);

northAmerica = ['Colombia', 'Brazil']; // TypeError: Assignment to constant variable.
*/

//4. Length Variable
/*
let southEastAsia = ['India', 'Pakistan', 'Bangladesh'];
let southAsia = ['India', 'Pakistan', 'Bangladesh', 'Buthan', 'Burma', 'Nepal'];

console.log(southAsia.length);
console.log(southEastAsia.length);
*/

//5. Push | Pop
//push() & pop() are used to add & remove elements from the end(to the end)
/*
let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turkey'];

nato.push('Romania', 'Greece', 'Lavita', 'Lithuania', 'Estonia');
console.log(nato);
// ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turkey'
// 'Romania', 'Greece', 'Lavita', 'Lithuania', 'Estonia'];

nato.pop();
nato.pop();
nato.pop();
console.log(nato);
*/

//6. Unshift | Shift
// unshift() & shift() used to add & remove elements from start(to start)
/*
nato.unshift('Ukraine', 'Finland', 'Poland');
console.log(nato);

nato.shift();
nato.shift();
console.log(nato);
*/

// 7. Slice arrays
// slice() method used to split arrays
//Arrays.indexOf('element'); usede to find index of element
/*
console.log(`Initial Nato was: ${nato.slice(1, 7)}`);

console.log("New Members are: " + nato.slice(8));

console.log(nato.slice(4, 6));

console.log(nato.indexOf('Germany'));
*/

//8. Loops
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 7; i >= 0; i--) {
    console.log(i);
}

let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turkey'];

for (let i = 0; i < nato.length; i++) {
    console.log(i);
}
*/

/*
let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turkey'];

for( let i = 0; i < nato.length; i++){
    console.log(`Long Live ${nato[i]} !!`);
}
*/

//9. Nested Loops
/*
let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turkey'];
let groupEight = ['USA', 'UK', 'Germany', 'Canada','Italy', 'France', 'Canada', 'Japan', 'Russia', 'Euoropean Union' ];
let common = [];

for (let i = 0; i < nato.length; i++) {

    for (let j= 0; j < groupEight.length; j++) {
        if (nato[i] === groupEight[j]) {
            common.push(nato[i]);
        }
    }
}

console.log(`Common Members are : ${common}`);
*/