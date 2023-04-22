
import { celciusToFahreniet, fahrenietToCelcius } from "./converters.js";
import { milliToCenti, centiToMeter } from "./converters.js";
import nano from './converters.js'

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById("container");
    element.innerHTML = `<h1> Boiling Point is: ${celciusToFahreniet(100)}
    & Freezing point is: ${celciusToFahreniet(0)}, <br><br>
    100 milli meters is ${milliToCenti(100)} centi-meters, <br><br>
    10000 centi meters is ${centiToMeter(10000)} meters, <br><br>
    One nanometers is ${nano} meters.
     </h1>`;
}

console.log(`Water Boiling Point is ${celciusToFahreniet(100)} Degree Fahreniet`);
console.log(`Water Boiling Point is ${fahrenietToCelcius(212)} Degree Celcius`);
