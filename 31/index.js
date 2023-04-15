console.log("This is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.givenExperience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear() {
        return 2020 - this.givenExperience;
    }

    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favouriteLanguage() {
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favouriteLanguage())
console.log(Programmer.multiply(5, 7));