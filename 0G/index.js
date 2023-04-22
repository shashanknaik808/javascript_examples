// 07 - Class in Js
// * Instant Obj creation
/*
let dog = {
    _breed: 'Golden Retriver',
    _weight: 18,
    _color: 'Orange',

    // Getters
    // Setters
    // Methods
}

// * Factory Obj creation
const dogFactory = (breed, weight, color) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,

    // Getters
    // Setters
    // Methods
    }
}
*/

// This keyword
// this. used to eliminate conflict b/w local and obj lvl variables
// this. holds reference of currently executing object
/*
class IceCream {                                      //pascal case

    constructor(flavor, size) {
        this.flavor =flavor;
        this.size =size;
    }
}
let i = new IceCream('Strawberry', 25);
*/

// Creating Obj
/*
class Dog {
    constructor(breed, weight, color, violant) {
        this._breed = breed;
        this._weight = weight;
        this._color = color;
        this._violant = violant;
    }

    showInfo() {
        console.log(`My Dog is ${this._breed},
        whose color is ${this._color}
        & its weighs ${this._weight} kilos`);

        this._violant ? console.log("Its is Ferocious \n") : console.log("Its is Sweet \n");
    }

    // Getter, Setter, Methods
    get breed() {
        return this._breed;
    }
    get weight() {
        return this._weight;
    }
    get color() {
        return this._color;
    }
    get violant() {
        return this._violant;
    }

    set breed(newBreed) {
        if (typeof newBreed == 'string') {
            this._breed = newBreed;
        }
    }
    set color(newColor) {
        if (typeof newColor == 'string') {
            this._color = newColor;
        }
    }
    set weight(num) {
        if (typeof num == 'number' && num > 0) {
            this._weight = num;
        }
        else {
            console.log("Please enter a valid number above 0");
        }
    }
    set violant(nature) {
        if (typeof nature == 'boolean') {
            this._violant = nature;
        }
    }

}

let d1 = new Dog('Golden Retriver', 18, 'Orange', false);
let d2 = new Dog('Alsetian', 12, 'Black', true);
let d3 = new Dog('Rotwiler', 15, 'Brown', true);
let d4 = new Dog('Labrador', 14, 'Cream', false);

d1.showInfo();
d2.showInfo();
d3.showInfo();
d4.showInfo();
/*

// Diff b/w Template & Object
/*
// Template                                  |              Object
1. template is an entity which describes     | 1. Obj is 1 such instances of that plan which is
plan                                         |brought to life in real time.        
2. Always exists as single entity            | 2. Multi obj can b created from 1 template 'n'
3. Will not die as it does not have life     | 3. Any obj created dies at some point of program.
4. Can create any no. without creating obj   | 4. No Obj can be created without having an exstng tmplt
*/


//  Class tmplt
//  Its an entity which holds the complete info of an object
//  Info includes
//  1. State of an obj : defines the prprts prsnt inside class that describes evry obj of this Tmplt
//  2. Behaviours : Defines all the actions performed which can b invoked inside every obj of this 
//Tmplt.
//  3. Class tmplt acts as DNA that contains the complete information of an obj which will come to 
// life in near future

//  Encapsulation
// The process of storing info of an obj Inside a Class tmplt,In the form of states&behavior

//  Conventions for class name
// *Should always be a valid identifier
// *class name shub be a noun
// *shud always starts with capital lttrs followed by camel case
// *shud not contain any digit or socl symbols(very rare)

// Instantiation
// Process of creating an obj using well defined class template in Js.

// Initialization
//  Process of assigning values to all instance variables prsnt after Creation of Object.

// Constructor working
/*
class Box {
    constructor(l, b, h) {
        this.l = l;
        this.b = b;
        this.h = h;
    }
    printVolume() {
        console.log(`Volume of the box is: ${this.l * this.b * this.h}`);
    }
    fetchSurfaceArea() {
        return 2 * (this.l * this.b + this.b * this.h + this.h * this.l);
    }
    setBoxSize(l, b, h) {
        this.l = l;
        this.b = b;
        this.h = h;   
    }
}

let b = new Box(5, 5, 5);

b.printVolume();
b.setBoxSize(10, 11, 12);
b.printVolume();
*/

// Confusion Alert of Constructer
// *A constructor will be executed only omce during Creation of an Object & not after that
// *can only b invoked using only 'new' keyword & not with help of dot operator
// *You call the architect during constructor of a house after 1 yr if you call him for some 
//  patch , he will never come

