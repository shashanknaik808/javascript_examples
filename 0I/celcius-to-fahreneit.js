function celsiusToFahreniet(celcius) {
    return celcius * (9/5) + 32;
}

const celciusInput = process.argv[2];
const fahrenietValue = celsiusToFahreniet(celciusInput);

console.log(`${celciusInput} degrees Celcius = ${fahrenietValue} degrees Fahraniet`);