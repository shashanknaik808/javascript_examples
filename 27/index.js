console.log("This is tut 27");

// Object Literal for creating objects 
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function() {
        console.log("car is running");
    }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is Running`);
    }
}