// Old function
function celsiusToFahreniet(celcius) {
    return celcius * (9/5) + 32;
}

// Exporting Old Function
module.exports.celsiusToFahreniet = celsiusToFahreniet;

// Declaring another fun & exporting on the same line
module.exports.fahrenietToCelcius = function (fahreniet) {
    return (fahreniet - 32) * (5 / 9);
}