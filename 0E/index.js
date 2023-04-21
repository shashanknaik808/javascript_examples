// 05 Objects in Js
/*
let dog = {
    breed: 'Husky',
    color: 'Black',
    weight: 15,
    'responds to': ['whistle', 'clap', 'ball'],
    tag_no: 77
}

let dogColor = dog.color;
console.log(`Color of the Dog is ${dogColor}`);
console.log(`The dog weighing ${dog.weight} kilos`);

// We cannot write 'dog.responds to' for a multiword key ,as it has space
let response = dog['responds to'];
console.log(`My dog responds to ${response}`);
console.log(dog.tag_no);
*/

/*
let baby = {
    cat : 'kitty',
    dog : 'pup',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling', 
    'lion' : 'cub',
    sheep : 'lamb'
}

console.log(baby);

console.log(baby.cat);
console.log(baby.dog);
console.log(baby['horse baby']);
console.log(baby['baby duck']);
console.log(baby.lion);
*/

// Property assignment
/*
let baby = {
    cat : 'kitty',
    dog : 'pup',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling', 
    'lion' : 'cub',
    sheep : 'lamb'
}

baby.cow = 'Calf';
baby['Baby Monkey'] = 'Infant';

delete baby.sheep;
delete baby['baby duck'];

console.log(baby);
*/

//Function exprsn as properties
/*
const action = {
    sayHello: function () {
        console.log("Hello Everyone");
    },
    sayNamaste: function (person) {
        console.log(`Namaste ${person}, How are you?`);
    },
    add: function (num1, num2) {
        return num1 + num2;
    }
}

action.sayHello();
action.sayNamaste('suma');
console.log(`Sum of two numbers is: ${action.add(10, 15)}`);
*/

// Pass by Reference
// we can pass obj's refrnce as an arguement pf method call(fun call) 
/*
let profile = {
    fullName: 'Sikander',
    status: 'single',
    children: 0,
    salried: true,
}

const modifyName = function (obj, changedName) {
    obj.fullName = changedName;
}

const addChild = (obj) => {
    obj.children = obj.children + 1;
}

modifyName(profile, 'SKD');
console.log(profile);

addChild(profile);
console.log(profile);
*/

//Iterate
//For in 
/*
baby = {
    cat : 'kitty',
    dog : 'pup',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling', 
    'lion' : 'cub',
    sheep : 'lamb'
}

for (let key in baby) {
    console.log(`Child of ${key} is called: ${baby[key]}`);
}
*/

//For of
/*
let fruits = ['apple', 'banana', 'kiwi', 'mango'];

for (let i of fruits){
    console.log(`Welcome ${i}`);
}
*/

// Hybrid obj
/*
let dog = {
    breed: 'Husky',
    color: 'Black',
    weight: 15,


    hungry() {
        console.log("Wagging the tail");
    },

    getInfo() {
        return `My dog is ${this.breed}, and ${this.color} in color & weight is ${this.weight} kilos`;
    }
}

dog.hungry();
console.log(dog.getInfo());
*/

//Wrong way 
/*
let dog = {
    breed: 'Husky',
    color: 'Black',
    weight: 15,
    hungry: () => {
        console.log("Wagging the tail");
    },

    getInfo: () => {
        return `My dog is ${this.breed}, and ${this.color} in color & weight is ${this.weight} kilos`;
    }
}

dog.hungry();
console.log(dog.getInfo());
*/

//Getter methods
/*
let dog = {
    _breed: 'Husky',
    color: 'Black',
    _weight: 15,
    get breed() {
        return this._breed;
    },
    get weight() {
        return this._weight;
    },

    hungry() {
        console.log("Wagging the tail");
    },

    getInfo() {
        return `My dog is ${this.breed}, and ${this.color} in color & weight is ${this.weight} kilos`;
    }
}

console.log(dog.breed);
console.log(dog.weight);
console.log(dog.color);

dog.hungry();
console.log(dog.getInfo());
*/

//Setter method
/*
let dog = {
    _breed: 'Husky',
    color: 'Black',
    _weight: 15,

    get breed() {
        return this._breed;
    },
    get weight() {
        return this._weight;
    },

    set breed(newBreed) {
        if (typeof newBreed === 'string') {
            this._breed = newBreed;
        }
    },
    set weight(num) {
        if (typeof num === 'number' && num > 0) {
            this._weight = num;
        }
        else {
            console.log("Please enter a valid number above 0");
        }
    }
}

console.log(`Dog Breed Before: ${dog.breed}`);
console.log(`Dog Weight Before: ${dog.weight}`);
console.log(`Dog Color Before: ${dog.color}`);

dog.breed = 'Beagle';
dog.weight = -10;
dog.color = 'Brown'

console.log(`Dog Breed After: ${dog.breed}`);
console.log(`Dog Weight After: ${dog.weight}`);
console.log(`Dog Color After: ${dog.color}`);
*/

// Factory
/*
const dogFactory = (breed, weight, color, violent) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,
        _violent: violent,

        showInfo() {
            console.log(`My Dog is a ${this._breed},
            whose color is ${this._color}
            and its weight ${this._weight} kilos`);

            this._violent ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        get color() {
            return this._color;
        },
        get violent() {
            return this._violent;
        },

        set breed(br) {
            (typeof br == 'string') ? this._breed = br : console.log('Please enter a proper breed name');
        },
        set weight(wei) {
            (typeof wei == 'string') ? this._weight = wei : console.log('Please enter a valid number');
        },
        set color(col) {
            (typeof col == 'string') ? this._color = col : console.log('Please enter a proper color');
        },
        set violent(vio) {
            (typeof vio == 'string') ? this._violent = vio : console.log('Please enter a proper condition');
        }
    }
}

let d1 = dogFactory('Husky', 20, 'White', true);
// d1.showInfo();

let d2 = dogFactory('Shitzu', 10, 'Brown', false);
// d2.showInfo();


//Built in Object Methods
// Object.keys() ; Object.entries(), Object.assign();

const dogKeys = Object.keys(d1);
// console.log(dogKeys);

const dogEntries = Object.entries(d1);
// console.log(dogEntries);

const modifiedDog = Object.assign({tail: 'Long & Furry', response_time: 2}, d1);
// console.log(modifiedDog);
*/

// Spread Operators
/*
const profile = {
    firstName: 'Bhadra',
    lastName: 'SP'
};

const address = {
    country: 'India',
    city: 'Bengaluru'
}

const user = {
    ...profile,
    gender: 'male',
    ...address
}

console.log(user);
*/