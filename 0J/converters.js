// Node Environment vs Browser Environment
// * Node runtime environment & module.exports and require() syntax
// * Browser runtime environment & ES6 we use import/export
// * export { celciusToFahreniet, fahrenietToCelcius};
// * export everything in single line

// First function
export function celciusToFahreniet(celcius) {
    return celcius * (9 / 5) + 32;
}

// Second function
export const fahrenietToCelcius = function (fahreniet) {
    return (fahreniet - 32) * (5 / 9);
};

// export { celciusToFahreniet, fahrenietToCelcius }; 

// Third function
const milliToCenti = (milimeter) => {
    return milimeter / 10;
}

// Forth function
const centiToMeter = (centimeter) => {
    return centimeter * 100;
}

// A plain variable 
const nanoMeter = 0.0000001;

export default nanoMeter;
// export { nanoMeter }

export { milliToCenti, centiToMeter };