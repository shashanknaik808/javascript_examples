// 10 - Modules in JS
const { celsiusToFahreniet, fahrenietToCelcius } = require('./coverters.js');

const freezingPointF = celsiusToFahreniet(0);
const boilingPointF = celsiusToFahreniet(100);

console.log(`The freezing point of water in Fahreniet is ${freezingPointF}`);
console.log(`The boiling point of water in Fahreniet is ${boilingPointF}`);

console.log(`The freezing point of water in Celcius is ${fahrenietToCelcius(32)}`);
console.log(`The boiling point of water in Celcius is ${fahrenietToCelcius(212)}`);